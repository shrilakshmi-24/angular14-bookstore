import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { LoginForm, RegisterForm } from './Auth';
import { createUserWithEmailAndPassword,signOut } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  passwordMatched: boolean = true;
  errorMessage: string | null = null;
  isAuthenticated: boolean = false;
  isLoading: boolean = false;

  constructor(private router:Router){}

  login(form: LoginForm) {
    if (this.isLoading) return;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        alert('Login success!');
       
        this.router.navigate([""])
        this.isAuthenticated = true;
        // ...
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Credentials does not match');
        // this.isAuthenticated = false;
      })
      .finally(() => (this.isLoading = false));
  }

  register(Form: RegisterForm) {
    if (this.isLoading) return;
    this.isLoading = true;
    if (Form.password !== Form.confirmPassword) {
      this.passwordMatched = false;
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, Form.email, Form.password)
      .then((userCredential) => {
        console.log(userCredential);
        // User registration successful
        this.isAuthenticated = true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        // Handle specific error codes or display a generic error message
        this.errorMessage = 'An error occurred during registration.';
        this.isAuthenticated = false;
      })
      .finally(() => (this.isLoading = false));
  }

  logout(){
    const auth = getAuth();
signOut(auth).then(() => {
  this.router.navigate(['login'])
  this.isAuthenticated=false
}).catch((error) => {
  // An error happened.
});


  }
}
