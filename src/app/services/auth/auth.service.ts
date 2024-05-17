import { Injectable } from '@angular/core';
import { GeneralService } from '../general/general.service';
import { BehaviorSubject, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private is_loggedIn = new BehaviorSubject<boolean>(false);
  userLoggedIn = this.is_loggedIn.asObservable();
  private accessToken = new Subject();
  token = this.accessToken.asObservable();
  // public token:any;
  

  constructor(private generalService: GeneralService) { }

  login(username:any, password:any){
    const data = {
      username: username,
      password: password
    }
    return this.generalService.sendUserData(data).pipe(
      tap((response:any)=>{
        localStorage.setItem('authToken',response.token)
        if(response.token){
          // this.token = response.token;
          this.is_loggedIn.next(true);
          this.accessToken.next(response.token)
          console.log(response)
        }
      })
    )
  }

  logout(){
    return this.generalService.userLogout()
  }
}
