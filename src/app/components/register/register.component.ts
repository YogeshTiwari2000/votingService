import { Component, inject, Inject } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [CommonModule, FormsModule, RouterLink],
  standalone: true,
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  // registerForm: FormGroup;
  submitted = false;
  message: string = '';
  router = inject(Router);


  user = {
    name: '',
    age: '',
    mobile: '',
    email: '',
    address: '',
    aadharCardNumber: '',
    password: '',
    role: ''
  };


  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }

  onSubmit() {

    this.submitted = true;
    console.log(" this.registerForm === ", this.user);

    this.authService.register(this.user).subscribe(
      response => {
        this.message = 'Registration successful!';
        alert(this.message);
        this.router.navigate(['/login']);
      },
      error => {
        this.message = 'Registration failed. Please try again.';
      }
    );
  }
}