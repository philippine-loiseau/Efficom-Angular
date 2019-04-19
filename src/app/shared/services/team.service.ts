import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private _url = environment.apiUrl;

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  getTeam(): Observable<any> {
    let currentUser = localStorage.getItem('currentUser');
    let token = JSON.parse(currentUser);

    const httpOptions = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
      
    return this.http.get<any>(this._url + '/trainers/me/team', { headers: httpOptions });
  }

}
