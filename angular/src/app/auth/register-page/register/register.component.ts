import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { passwordResponce, register } from 'src/app/models/register.model';
import { routes } from 'src/app/shared/service/routes/routes';
import { AuthService } from 'src/app/shared/service/common/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public routes = routes;
  public registerForm:register={}
  public passwordResponce:passwordResponce={};

  

  email: string = '';
  password: string = '';
  username: string = '';
  lastname: string = '';
  firstname: string = '';
  show = true;

  public registerOwlOptions: OwlOptions = {
    margin: 25,
    nav: true,
    loop: true,
    responsive: {
        0: {
          items: 1
        },
        768 : {
          items: 3
        },
        1170: {
          items: 4
        }
    },
  };

  constructor(private authService: AuthService,private router: Router) {}

  ngOnInit(): void {
  }

  register() {
    // Call your AuthService's registration method with the form data
    const userDetails = {
      userName: this.username,
      userLastName: this.lastname,
      userFirstName: this.firstname,
      userEmail: this.email,
      userPassword: this.password,
      // Add more fields if needed
    };
    console.log("userdetails:", userDetails);

    this.authService.register(userDetails).subscribe(
      (response) => {
        // Registration successful, handle the response
        console.log('Registration successful:', response);
        // Redirect the user to a success page or perform other actions as needed
        this.router.navigate(['/auth/login']);

      },
      (error) => {
        // Registration failed, handle the error
        console.error('Registration failed:', error);
        // Display an error message to the user
      }
    );
  }
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = false;
    } else {
      this.password = 'password';
      this.show = true;
    }
  }
  public onChangeEmail(email:any){
    console.log("email:", email)
    this.email = email;
  }
  public onChangeLastName(lastname:any){

    this.lastname = lastname;
  }
  public onChangeFirstName(firstname:any){

    this.firstname = firstname;
  }
  public onChangeUsername(username:any){

    this.username = username;
  }

  public onChangePassword(password:any){
    this.password = password
    if(password.match(/^$|\s+/)) {
      this.passwordResponce.passwordResponceText = "whitespaces are not allowed"
      this.passwordResponce.passwordResponceImage = ""
      this.passwordResponce.passwordResponceKey = ''
      return
    }
    if(password.length == 0){
      this.passwordResponce.passwordResponceText = ""
      this.passwordResponce.passwordResponceImage = ""
      this.passwordResponce.passwordResponceKey = ''
      return
    }
    if (password.length < 8) {
      this.passwordResponce.passwordResponceText = "Weak. Must contain at least 8 characters"
      this.passwordResponce.passwordResponceImage = "assets/img/icon/angry.svg"
      this.passwordResponce.passwordResponceKey = '0'
    } else if (password.search(/[a-z]/) < 0) {
      this.passwordResponce.passwordResponceText = "Average. Must contain at least 1 upper case and number"
      this.passwordResponce.passwordResponceImage = "assets/img/icon/anguish.svg"
      this.passwordResponce.passwordResponceKey = '1'
    } else if(password.search(/[A-Z]/) < 0) {
      this.passwordResponce.passwordResponceText = "Average. Must contain at least 1 upper case and number"
      this.passwordResponce.passwordResponceImage = "assets/img/icon/anguish.svg"
      this.passwordResponce.passwordResponceKey = '1'
    } else  if (password.search(/[0-9]/) < 0) {
      this.passwordResponce.passwordResponceText= "Average. Must contain at least 1 upper case and number"
      this.passwordResponce.passwordResponceImage = "assets/img/icon/anguish.svg"
      this.passwordResponce.passwordResponceKey = '1'
    } else  if (password.search(/(?=.*?[#?!@$%^&*-])/) < 0) {
      this.passwordResponce.passwordResponceText = "Almost. Must contain special symbol"
      this.passwordResponce.passwordResponceImage = "assets/img/icon/smile.svg"
      this.passwordResponce.passwordResponceKey = '2'
    }else {
      this.passwordResponce.passwordResponceText = "Awesome! You have a secure password."
        this.passwordResponce.passwordResponceImage = "assets/img/icon/smile.svg"
         this.passwordResponce.passwordResponceKey = '3'
     }
  }

}
