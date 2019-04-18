import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Trainer } from '../models/trainer.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _url = environment.apiUrl;
  private currentUserSubject: BehaviorSubject<Trainer>;
  public currentUser: Observable<Trainer>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Trainer>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Trainer {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${this._url}/auth/login`, { email, password })
      .pipe(map(trainer => {
        if (trainer || trainer.access_token) {
          localStorage.setItem('currentUser', JSON.stringify(trainer.access_token));
          this.currentUserSubject.next(trainer);
        }

        return trainer;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
