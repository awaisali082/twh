import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentloginService {
  AUTH_API = 'http://localhost:8080/api/auth/';

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  constructor(private http:HttpClient) {

   }
   register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(this.AUTH_API + 'signup', { username,email,password }, this.httpOptions);
  }
  student_Login()
{
  return [
{name:'awais',email:'awais.ali082@gmail.com'},
{name:'ali',email:'ali@gmail.com'},
{name:'abdullah',email:'Abdullah@gmail.com'}

  ];
}
}


