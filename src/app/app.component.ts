import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userId = 2;
  constructor(private router: Router) {}
  login() {
    let demoUserId = 2;
    if (this.userId === demoUserId) {
      this.router.navigate(['dashboard']);
    } else {
      alert('User does not exist');
    }
  }
}
