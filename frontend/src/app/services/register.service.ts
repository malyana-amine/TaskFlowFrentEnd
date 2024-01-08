import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient) { }

  signUp(username: string, email: string, password: string): Observable<any> {
    const signUpData = { username, email, password };
    console.log('Sign Up Data:', signUpData);
    return this.http.post(`${this.apiUrl}/register`, signUpData);
  }
}
