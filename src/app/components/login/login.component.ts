import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login = {
    aadharCardNumber: '',
    password: ''
  }
  constructor(private authService: AuthService, private router: Router) {

  }

  onSubmit() {
    console.log("login === ", this.login);

    this.authService.login(this.login.aadharCardNumber, this.login.password).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/userProfile']);
      }
    );

  }
  forgetPassword() {

  }
}