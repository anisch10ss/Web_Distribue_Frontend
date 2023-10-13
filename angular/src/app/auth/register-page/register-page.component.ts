import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/common/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register() {
    // Call your AuthService's registration method with the form data
    const userDetails = {
      email: this.email,
      password: this.password,
      // Add more fields if needed
    };

    this.authService.register(userDetails).subscribe(
      (response) => {
        // Registration successful, handle the response
        console.log('Registration successful:', response);
        // Redirect the user to a success page or perform other actions as needed
      },
      (error) => {
        // Registration failed, handle the error
        console.error('Registration failed:', error);
        // Display an error message to the user
      }
    );
  }
}