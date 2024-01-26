import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, map } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from '../_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private api: string = `${environment.api}`;
  //private currentUserSource =  new ReplaySubject<User>(1);
  private currentUserSource =  new BehaviorSubject<User | null>(null);

  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: any){
    return this.http.post<User>(this.api + 'Account/Login', model).pipe(
      map((response: User) => {
        const user = response;
        if(user) {
          localStorage.setItem('user', JSON.stringify(user))
          this.currentUserSource.next(user);
        }
      })
    )
  }

  userCreation(model: any){
    return this.http.post<User>(this.api + 'Account/register', model).pipe(
      map((user : User) => {
        if(user) {
          this.setCurrentUser(user);
        }
      })
    )
  }
  

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);

    user.roles = [];
    const roles = this.getDecodedToken(user.token).role;
    Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  getDecodedToken(token:string){
    return JSON.parse(atob(token.split('.')[1]))
  }
}
