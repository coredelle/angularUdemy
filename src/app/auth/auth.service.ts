import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from './user.model';
import {Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new Subject<UserModel>();

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAkPwThlSHjN8THWhbC1FyP_j9OWAgRNSs',
      {
        email,
        password,
        returnSecureToken: true
      }).pipe(tap(resData => {
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn);
      })
    );
  }

  signIn(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAkPwThlSHjN8THWhbC1FyP_j9OWAgRNSs',
      {
        email,
        password,
        returnSecureToken: true
      }).pipe(tap(resData => {
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn);
      })
    );
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new UserModel(
      email,
      userId,
      token,
      expirationDate
    );
    this.user.next(user);
  }
}
