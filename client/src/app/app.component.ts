import { Component } from '@angular/core';

import { OpenDialogService } from './shared/service/open-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private openWindow: OpenDialogService) {}

  title = 'real-estate';

  testFunction() {
    console.log('Hello');
  }

  login() {
    this.openWindow.openLoginWindow();
  }
  register() {
    this.openWindow.openRegisterWindow();
  }
}
