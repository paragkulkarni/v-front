import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  url = environment.url
  constructor(private httpClient: HttpClient) {
  }

  sendWordData(data:any){
    return this.httpClient.post(`${this.url}/share-word`, data)
  }

  sendUserData(data: any){
    console.log("req.body.data",data)
    return this.httpClient.post(`${this.url}/user`, data)
  }

  getWordInfo(){
    const token = localStorage.getItem('authToken')
    return this.httpClient.get(`${this.url}/share-word`,
    {headers:{"Authorization":`Bearer ${token}`}}).pipe(catchError(error => of(error)))
  }

  userLogout(){
    console.log("logout call")
    // const token = localStorage.getItem('authToken');
    return this.httpClient.post(`${this.url}/logout`,{})
  }
}
