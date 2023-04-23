import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiAnnouncementService {
  constructor(private http: HttpClient) {}

  url_server: string = environment.URL_SERVER_API + 'announcement/';

  createAnnouncement(data: any): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      `${this.url_server}create`,
      data,
      { withCredentials: true }
    );
  }
}
