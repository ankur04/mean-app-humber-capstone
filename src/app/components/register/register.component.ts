import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/service/register/register.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', './../../styles/form.css']
})
export class RegisterComponent implements OnInit {

  private user: User = new User();
  private error: string;

  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit() {
  }

  submit() {
    this.registerService.register(this.user)
      .subscribe(() => this.router.navigate(['/home']),
        (err) => this.error = "Error: " + err.error
      );
  }

  back() {
    this.router.navigate(['/login']);
  }

}
