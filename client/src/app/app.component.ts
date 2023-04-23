import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/service/server/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    const potentialToken = localStorage.getItem('auth-token');
    this.auth.setToken(potentialToken);

    if (potentialToken !== null) {
      // the user is authorized in the system
      console.log('The user is authorized in the system');
    } else {
      // the user is not authorized in the system
      console.log('The user is NOT authorized in the system');
    }
  }

  title = 'real-estate';
}
