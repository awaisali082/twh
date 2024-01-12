import { Component,Input } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import{LoginService} from '../service/login.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
  
})

export class LoginComponent {
  isSellerLogedIn=new BehaviorSubject<Boolean>(false);
  icon = faEnvelope;
  appleicon=faAppleAlt;
  public toastcondition:boolean=false;
  public POSTS:any;
 public  Username:any;
 public  Password:any;
public token:any;
public emailtoken:any
public storedToken:any;
public x:any;

  constructor( private  router: Router,private _loginservie:LoginService ){
    
}
/* ngOnInit(): void {
  this.ssoauthService.authState.subscribe((user)=>{
    this.user = user;
    this.loggedIn = (user != null);
    this.isLoggedin = user != null;
    console.log("Login User = " + this.user.name + this.user.email);

    
  });
} */
/* signInWithFB(): void { //Facebook Login
  this.ssoauthService.signIn(FacebookLoginProvider.PROVIDER_ID);
} */
  sendStudentLogin()
  {
/*     console.log(this.Username=this.Username,this.Password=this.Password) */
if(this.Username==null || this.Password==null)
{
 alert('Please Fill Empty Fields')
  this.router.navigate(['/']);
}
else{
    {
      this._loginservie.login(this.Username,this.Password).subscribe((data)=>{
      console.log(data);
      

        this.POSTS=data;

        console.log(this.POSTS.data.token,'yes');
       this.storedToken = this.POSTS.data.token;
      


/* email veriy */
 this._loginservie.verifyEmail(this.storedToken).subscribe((data)=>{
  console.log(data);
  this.isSellerLogedIn.next(true);
  localStorage.setItem('user_LogedIn',JSON.stringify(data));
    this.POSTS=data;

    console.log(this.POSTS.data.token,'yes');
   this.storedToken = this.POSTS.data.token;
  
   console.log('token agaya',this.storedToken);
   if(this.storedToken!=null)
   {
       this.router.navigate(['/dashboard']);
  
   }
   else
   {
    this.router.navigate(['/']);
 
   }
  
  }) 


       if(this.storedToken!=null)
       {
           this.router.navigate(['/dashboard']);
      
       }
       else
       {
        this.router.navigate(['/']);
     
       }
      
      })
  } 
  
}

  }
 


 /*   myFunction() {
    this.x = document.getElementById("snackbar");
    this.x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  } */ 
}
