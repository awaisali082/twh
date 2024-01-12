import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{BaseUrlServiceService} from './base-url-service.service';
@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {
  serviceurl=new BaseUrlServiceService();
  constructor(private http:HttpClient) { }
  registered(email:string,name:string, password:string,type:string) {
    var data;
     data = { email: email,name:name, password: password , type: type};
     console.log('register email',data);
 
       return this.http.post(this.serviceurl.baseUrl + '/v1/auth/register',data );
    
   
     }
}
