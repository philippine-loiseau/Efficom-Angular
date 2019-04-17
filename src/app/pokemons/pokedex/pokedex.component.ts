import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  id: number;
  @Output() idUpdatedd: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onIdUpdated(id:number) {
    this.id = id;
  }

}
