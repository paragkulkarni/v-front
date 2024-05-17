import { Component } from '@angular/core';
import { FormControl, FormGroup, NgControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup(
    {
      username: new FormControl(''),
      password: new FormControl('')
    }
  )

  constructor(private loginService:AuthService, private route: Router){}

  loginFormSubmit(){
    this.loginService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe((result:any)=>{
      console.log('here', result)
      if(result['user-exists']){
        this.route.navigate(['/home/share/word'])
      }
      
    })
  }
}
