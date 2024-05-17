import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {
  token:any;
  constructor(private authService: AuthService) { }
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      this.authService.token.subscribe(r=>{
        console.log(r)
        this.token = r;
      })
      ;
      if(this.token){
        req = req.clone({
          setHeaders:{
            Authorization: `Bearer ${this.token}`,
          }
        })
      }

      return next.handle(req)
      // .
      // pipe(
      //   catchError((err:any)=>{
      //     if(err.status===401){
      //       this.authService.logout();
      //     }
      //     const error = err.error.message || err.statusText;
      //     return throwError(() => new Error(error));
      //   })
      // );
    }
  
}
