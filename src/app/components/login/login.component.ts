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
  loading: boolean = false;
  constructor(private authService: AuthService, private router: Router) {

  }

  onSubmit() {
    this.loading = true; // Start loading
    this.authService.login(this.login.aadharCardNumber, this.login.password).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/userProfile']);
      },
      error: (err) => {
        alert('Invalid Credentials');
        this.loading = false; // Stop loading on error
      }
    });
  }

  forgetPassword() {

  }
}