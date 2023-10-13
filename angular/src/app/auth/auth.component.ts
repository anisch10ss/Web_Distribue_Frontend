import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/common/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  registrationData = { /* initialize with registration form fields */ };
  errorMessage = '';
  credentials = { email: '', password: '' };

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      
    });
  }

  /*login() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        this.router.navigate(['/home-three']);
      },
      (error) => {
        this.errorMessage = 'Login failed. Please check your credentials.';
      }
    );
  }*/

  register() {
    this.authService.register(this.registrationData).subscribe(
      (response) => {
        this.router.navigate(['/confirmation']);
      },
      (error) => {
        this.errorMessage = 'Registration failed. Please try again.';
      }
    );
  }

  
}
