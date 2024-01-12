import { Component } from '@angular/core';
import { RegistrationServiceService } from '../../service/registration-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  email: any;
  username: any;
  password: any;
  ConfirmPassword: any;
  usertype: any;
  getusertype: any;
  code: any;
  tutorInfo:boolean=false;
  youtubeid:boolean=false;
device:boolean=true;
  constructor(private router: Router, private _userRegister: RegistrationServiceService) { }
  fromYoutube()
  {
    this.youtubeid=true;
  }
  fromDevice()
  {
    this.youtubeid=false;
  }
  Studenttype(types: string) {
    this.usertype = types;
    this.tutorInfo=false;
  }
  Tutortype(types: string) {
    this.usertype = types;
    this.tutorInfo=true;
  }
  Registration() {
    this._userRegister.registered(this.email, this.username, this.password, this.usertype).subscribe((data) => {
      console.log('Register Response', data);
      this.code = data;
      console.log(this.code.code);
      if (this.code.code == 200) {

        alert(this.code.data.message);
        this.router.navigate(['/']);
      }
      else {
        alert('Kindly Add New  Details');
        this.router.navigate(['/registration']);
      }
    }

    )


  }
}
