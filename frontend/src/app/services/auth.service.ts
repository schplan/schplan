import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from 'shared';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BASE_URL = `http://${location.hostname}:3000`;

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  login(username: string, password: string): Observable<AuthResponse> {
    const url = `${this.BASE_URL}/auth/login`;
    return this.http.post<AuthResponse>(url, { username, password });
  }

  register(username: string, password: string): Observable<AuthResponse> {
    const url = `${this.BASE_URL}/auth/register`;
    return this.http.post<AuthResponse>(url, { username, password });
  }
}
