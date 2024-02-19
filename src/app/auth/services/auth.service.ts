import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { tap } from 'rxjs';
import { IUser } from 'src/app/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authAPI = 'https://api.realworld.io/api';
  private http = inject(HttpClient);
  
  currentUserSig = signal<IUser | undefined |  null>(undefined);
  login (cridentials: {email: string, password: string}) {
    return this.http
    .post<{ user: IUser }>(
      `${this.authAPI}/users/login`,
      { user: cridentials}
    ).pipe(
      tap((response) => {
        localStorage.setItem('token', response.user.token);
        this.currentUserSig.set(response.user);
      })
    );
  }
}

