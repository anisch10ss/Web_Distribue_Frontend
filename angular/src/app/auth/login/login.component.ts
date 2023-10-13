import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/service/data/data.service';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/service/routes/routes';
import { AuthService } from 'src/app/shared/service/common/auth.service'; // Import AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public routes = routes;
  password = 'password';
  show = true;
  credentials = { userName: '', userPassword: '' };

  public welcomeLogin: any = [];

  public welcomeLoginOwlOptions: OwlOptions = {
    margin: 25,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 4,
      },
    },
  };

  constructor(
    private DataService: DataService,
    private router: Router,
    private authService: AuthService // Inject AuthService
  ) {
    this.welcomeLogin = this.DataService.welcomeLogin;
  }

  ngOnInit(): void {}

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = false;
    } else {
      this.password = 'password';
      this.show = true;
    }
  }


  // Add the login function
  login() {
    // Replace these hard-coded values with actual user input

    // Call the AuthService's login method
    this.authService.login(this.credentials).subscribe(
      (response) => {
        // Authentication successful, handle the response
        // For example, store the token and navigate to the authenticated part of your app.
        this.router.navigate(['/home-three']);
      },
      (error) => {
        // Authentication failed, handle the error
        console.error('Authentication failed:', error);
        // Display an error message to the user.
      }
    );
  }
}
