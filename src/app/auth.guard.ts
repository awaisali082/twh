import { CanActivateFn } from '@angular/router';
import { LoginComponent } from './login/login.component';


export const authGuard: CanActivateFn = (route, state) => {
  
  return true;
};
