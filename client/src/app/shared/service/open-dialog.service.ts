import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Redirect } from '../interface/interfaces';

import { LoginComponent } from 'src/app/layouts/auth/login/login.component';
import { RegisterComponent } from 'src/app/layouts/auth/register/register.component';

import { RenameTitleService } from './rename-title.service';
import { OpenSnackBarService } from './open-snack-bar.service';

@Injectable({
  providedIn: 'root',
})
export class OpenDialogService {
  constructor(
    private routre: Router,
    public dialog: MatDialog,
    private renameTitle: RenameTitleService,
    private openSnackBar: OpenSnackBarService
  ) {}

  openLogin: boolean = false;
  openLoginWindow() {
    if (this.openLogin === false) {
      this.openLogin = true;

      const dialogRef: MatDialogRef<LoginComponent, Redirect | undefined> =
        this.dialog.open(LoginComponent, {
          width: '600px',
        });

      dialogRef.afterClosed().subscribe((result) => {
        this.renameTitle.renameTitleSite('DOM.RIA');
        this.openLogin = false;

        if (result) {
          if (result.redirectTo === 'register') {
            this.openRegisterWindow();
          }
          if (result.error === 'user_authorized') {
            this.openSnackBar.open('Ви вже авторизовані в системі.', undefined);
          }

          if (result.success === 'authorized') {
            this.openSnackBar.open('Авторизація успішна.', undefined);
            // this.routre.navigate(['/account']);
          }
        }
      });
    }
  }

  openRegisterWindow() {
    const dialogRef: MatDialogRef<RegisterComponent, Redirect | undefined> =
      this.dialog.open(RegisterComponent, {
        width: '800px',
      });

    dialogRef.afterClosed().subscribe((result) => {
      this.renameTitle.renameTitleSite('DOM.RIA');

      if (result) {
        if (result.redirectTo === 'login') {
          this.openLoginWindow();
        }
        if (result.error === 'user_registered') {
          this.openSnackBar.open(
            'Щоб створити новий акаунт, потрібно завершити сесію.',
            undefined
          );
        } else if (result.success === 'registered') {
          this.openSnackBar.open('Реєстрація успішна.', undefined);
          this.routre.navigate(['/account/user']);
        }
      }
    });
  }
}
