import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{BaseUrlServiceService} from './base-url-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  serviceurl=new BaseUrlServiceService();

  constructor(private http:HttpClient) { }
 


  login(email:string, password:string) {
   var data;
    data = { email: email, password: password ,type: 'student'};
    

      return this.http.post(this.serviceurl.baseUrl + '/v1/auth/login',data );
   
  
    }
    
    
  verifyEmail(token:string) {
    console.log('email verified', token);
    var data;
     data = { token:token};
     
       return this.http.post(this.serviceurl.baseUrl + '/v1/auth/verifyEmail',token );
    
   
     }
  sendResetEmail(email:string) {
    var data;
     data = { email: email};
     console.log(data);
 
       return this.http.post(this.serviceurl.baseUrl + '/v1/auth/forgot',data );
    
   
     }
}
