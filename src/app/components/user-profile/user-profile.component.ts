import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import jwt_decode from 'jwt-decode';
import { CandidateListComponent } from "../candidate-list/candidate-list.component";
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  imports: [CandidateListComponent, RouterModule]
})
export class UserProfileComponent implements OnInit {
  user: any = {};

  router = inject(Router);
  constructor(private authService: AuthService, private localStr: LocalStorageService) { }

  ngOnInit(): void {
    this.getUserProfile()
  }

  getUserProfile(): void {
    this.authService.getProfile().subscribe(
      (data) => {
        this.user = data.user;
        console.log("this.user === ", this.user);
        console.log("this.userId === ", this.user._id);
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }

  editProfile() {
    // logic to edit profile
  }

  updateProfile(): void {
    this.authService.updateProfile(this.user).subscribe(
      (response) => {
        console.log('Profile updated successfully:', response);
      },
      (error) => {
        console.error('Error updating profile:', error);
      }
    );
  }
  logOut() {
    this.localStr.clear();
    this.router.navigate(['/signup']);
  }
}