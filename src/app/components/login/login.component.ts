import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getEmail, setEmail } from 'src/app/helpers/storage.helper';
import { User } from 'src/app/model/User';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './../../styles/form.css']
})
export class LoginComponent implements OnInit {

  private user: User = new User();
  private error: string;
  private isRemberMeChecked: boolean;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.user.email = getEmail();
  }

  login() {
    this.loginService.login(this.user)
      .subscribe(() => {
        if (this.isRemberMeChecked) {
          setEmail(this.user.email);
        }
        this.router.navigate(['/home'])
      },
        (err) => this.error = "Error: " + err.error
      );
  }

  register() {
    this.router.navigate(['register']);
  }
}
