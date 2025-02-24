import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private apiUrl = `${environment.apiUrl}/candidate`;

  constructor(private http: HttpClient) { }

  getCandidates(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getCandidateById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addCandidate(candidate: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, candidate);
  }

  // updateCandidate(id: string, candidate: any): Observable<any> {
  //   return this.http.put<any>(`${this.apiUrl}/vote/${id}`, candidate);
  // }

  deleteCandidate(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }


  updateCandidate(id: string): Observable<any> {
    const token = localStorage.getItem('token'); // Get token from local storage

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`, // Attach token in headers
    });

    return this.http.put<any>(`${this.apiUrl}/vote/${id}`, {}, { headers }); // Send an empty body
  }

}