import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/user`;

  constructor(private http: HttpClient) { }

  login(aadharCardNumber: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { aadharCardNumber, password });
  }

  register(userData: any): Observable<any> {
    console.log("userData === ", userData);

    return this.http.post(`${this.apiUrl}/signup`, userData);;
  }

  // getProfile(): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/profile`);
  // }
  getProfile(): Observable<any> {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    console.log("token === ", token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.apiUrl}/profile`, { headers });
  }

  updateProfile(userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/profile`, userData);
  }
}