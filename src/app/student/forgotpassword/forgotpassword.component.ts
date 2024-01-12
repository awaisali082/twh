import { Component } from '@angular/core';
import{LoginService} from '../../service/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent {
public Email:any;
constructor(private  router: Router,private _loginservice:LoginService,)
{

}
sendResetEmail()
  {
if(this.Email==null)
{
  alert('Please fill the empty field');
}
else
{
    {
      this._loginservice.sendResetEmail(this.Email).subscribe((data)=>{
      console.log(data);

      console.log(data);
      
           this.router.navigate(['/']);
      
       }
     
      )
  } 
}
  

  }
}

