import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Pokemon } from '../models/pokemon.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  _url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this._url + '/pokemons?offset=0&limit=151');
  }

  getPokemonDetailsWithId(id: any): Observable<Pokemon> {
    return this.http.get<Pokemon>(this._url + '/pokemons/' + id);
  }

  getPokemonsPagination(offset = '0') {
    const params = new HttpParams()
    .set('offset', offset)
    .set('limit', '20')

    return this.http.get(this._url+'/pokemons' + params)
  }

}
