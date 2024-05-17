import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  wordDesForm =new FormGroup({
    word: new FormControl(""),
    description: new FormControl("")
  })
  wordInfo:any= []
  constructor(private genService:GeneralService, private route: Router,private authService: AuthService){
    this.getWordInfo();
  }

  wordSubmit(){
    const dt=
    {
      user_id: 2,
      word: this.wordDesForm.value.word,
      description: this.wordDesForm.value.description
    }
    console.log(dt)
    this.genService.sendWordData(dt).subscribe(
      result=>{
        this.route.navigate(['home/share/word'])
        this.getWordInfo();
      }
    )
    
  }

  getWordInfo(){
    this.genService.getWordInfo().subscribe((result:any)=>{
      console.log("1233here",result.status==403)
      if(result.status==403){
        console.log("here121d")
        this.route.navigate(['auth/login'])
      }else{
        this.wordInfo = result;
      }
      
    }, (error)=>{
      console.log(error)
    })
  }

  logoutClick(){
    let logout:boolean;
    this.authService.logout().subscribe((r:any) => {
      console.log(r);
      logout = r.logout;
      if(logout){
        localStorage.removeItem('authToken');
        // endToken
        this.route.navigate(['auth/login/']);
      }
      
    })

    
  }

}
