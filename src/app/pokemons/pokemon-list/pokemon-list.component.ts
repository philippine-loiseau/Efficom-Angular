import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { Observable, Subject } from 'rxjs';
import { SearchService } from 'src/app/shared/services/search.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemons;
  @Output() idUpdated: EventEmitter<number> = new EventEmitter();
  results = [];
  searchTerm$ = new Subject<string>();

  array = [];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';

  constructor(private pokemonService: PokemonService, private searchService: SearchService) { 
    this.appendItems(0, this.sum);
    this.searchPokemon();
  }

  emitId(id:number): void {
    this.idUpdated.emit(id);
  }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getPokemons().subscribe(data => {
      this.pokemons = data['data'];
    }, error => {
      Observable.throw(error);
    })
  }

  searchPokemon() {
    this.searchService.search(this.searchTerm$)
    .subscribe(results => {
      this.results = results['data'];
    });
  }

  addItems(startIndex, endIndex, _method) {
    for (let i = 0; i < this.sum; ++i) {
      this.array[_method]([i, ' ', this.generateWord()].join(''));
    }
  }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }

  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'unshift');
  }

  onScrollDown(ev) {
    console.log('scrolled down!!', ev);

    // add another 20 items
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);

    this.direction = 'down'
  }

  onUp(ev) {
    console.log('scrolled up!', ev);
    const start = this.sum;
    this.sum += 20;
    this.prependItems(start, this.sum);

    this.direction = 'up';
  }

  generateWord() {
    // return chance.word();
  }

}
