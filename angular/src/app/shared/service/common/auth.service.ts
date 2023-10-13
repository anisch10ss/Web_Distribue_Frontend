import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:9090/e'; // Update with your backend URL
  private tokenKey = 'R8trVhiHmIXrPxm8mZKLbxfQBGABOG';

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  login(credentials: { userName: string; userPassword: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/authenticate`, credentials).pipe(
      tap((response: any) => {
        console.log(response)
        if (response && response.jwtToken) {
          // Store the JWT token in local storage
          localStorage.setItem(this.tokenKey, response.jwtToken);
        }
      })
    );
  }

  register(userDetails: any): Observable<any> {
    console.log("userdetails in register:", userDetails);

    return this.http.post(`${this.baseUrl}/registerNewUser`, userDetails);
  }

  activateAccount(verificationToken: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/activate/${verificationToken}`, null);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  logout(): void {
    // Remove the JWT token from local storage
    localStorage.removeItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    // Check if the user is authenticated by verifying the token's existence and validity
    const token = localStorage.getItem(this.tokenKey);
    return !!token; // Modify this to validate the token's expiration and signature
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Add methods for password reset, etc. as needed
}
