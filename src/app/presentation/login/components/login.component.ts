import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-components',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router :Router) {}

  login() {
    this.router.navigate(['/menu']);
  }
}
