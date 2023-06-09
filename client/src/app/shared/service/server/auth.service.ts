import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, tap } from 'rxjs';

import { UserLogin, UserRegister } from '../../interface/interfaces';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private token: string | null = null;

  url_server: string = environment.URL_SERVER_API + 'auth/';

  register(user: UserRegister): Observable<{ auth_token: string }> {
    return this.http
      .post<{ auth_token: string }>(`${this.url_server}users/`, user, {
        withCredentials: true,
      })
      .pipe(
        tap(({ auth_token }) => {
          localStorage.setItem('auth-token', auth_token);
          this.setToken(auth_token);
        })
      );
  }

  login(user: UserLogin): Observable<{ auth_token: string }> {
    return this.http
      .post<{ auth_token: string }>(`${this.url_server}token/login/`, user, {
        withCredentials: true,
      })
      .pipe(
        tap(({ auth_token }) => {
          localStorage.setItem('auth-token', auth_token);
          this.setToken(auth_token);
        })
      );
  }

  checking(): Observable<{ authorization: boolean; message: string }> {
    return this.http.get<{ authorization: boolean; message: string }>(
      `${this.url_server}checking/`,
      { withCredentials: true }
    );
  }

  refresh(): Observable<{ auth_token: string; refreshToken: string }> {
    return this.http
      .get<{ auth_token: string; refreshToken: string }>(
        `${this.url_server}refresh/`,
        { withCredentials: true }
      )
      .pipe(
        tap(({ auth_token }) => {
          localStorage.setItem('auth-token', auth_token);
          this.setToken(auth_token);
        })
      );
  }

  logout(): Observable<any> {
    return this.http
      .get<any>(`${this.url_server}token/logout/`, {
        withCredentials: true,
      })
      .pipe(
        tap(() => {
          this.setToken(null);
          localStorage.removeItem('auth-token');
        })
      );
  }

  setToken(token: string | null) {
    this.token = token;
  }

  getToken(): string | null {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
