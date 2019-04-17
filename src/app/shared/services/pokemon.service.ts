import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import { Pokemon } from '../models/pokemon.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  _url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this._url+'/pokemons?offset=0&limit=151');
  }
  

  getPokemonDetailsWithId(id:any): Observable<Pokemon> {
    return this.http.get<Pokemon>(this._url+'/pokemons/'+id);
  }

}
