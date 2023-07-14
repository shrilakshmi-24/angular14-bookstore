import { Component } from '@angular/core';
import { RegisterForm } from '../Auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  Form: RegisterForm = {
    email: '',
    password: '',
    confirmPassword: ''
  };
 
  constructor(private authService: AuthService){}

  submit(): void {
    this.authService.register(this.Form)
      
}
isLoading(){
  return this.authService.isLoading
}
}
