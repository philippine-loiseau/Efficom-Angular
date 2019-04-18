import { Injectable } from '@angular/core';
import { Trainer } from '../models/trainer.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private _url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createTrainer(trainer: Trainer) {
    return this.http.post<Trainer>(this._url+'/trainers', trainer);
  }

}
