import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { IUser } from 'src/app/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authAPI = 'https://api.realworld.io/api';
  private http = inject(HttpClient);
  private router = inject(Router);
  
  currentUserSig = signal<IUser | undefined |  null>(undefined);

  login (logCredentials: {email: string, password: string}) {
    return this.http
    .post<{ user: IUser }>(
      `${this.authAPI}/users/login`,
      { user: logCredentials}
    ).pipe(
      tap((response) => {
        localStorage.setItem('token', response.user.token);
        this.currentUserSig.set(response.user);
        this.router.navigate(['/dashboard']);
      })
    );
  }

  register (regCredentials: {username: string, email: string, password: string}) {
    return this.http
    .post<{ user: IUser }>(
      `${this.authAPI}/users`,
      { user: regCredentials }
    ).pipe(
      tap((response) => {
        localStorage.setItem('token', response.user.token);
        this.currentUserSig.set(response.user);
        this.router.navigate(['/dashboard']);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSig.set(null);
    this.router.navigate(['']);
  }
}

