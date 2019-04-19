import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/shared/services/team.service';
import { Observable, forkJoin } from 'rxjs';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {


  public pokemons;

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  constructor(private teamService: TeamService, private pokemonService: PokemonService) { }
  
  ngOnInit() {
    this.getTeam();
    console.log(this.pokemons);
  }

  

  getTeam() {
    this.teamService.getTeam().subscribe(results => {
      let observable: Observable<Pokemon>[] = [];
      results.forEach(response => {
        console.log('response', response)
        observable.push(
          this.pokemonService.getPokemonDetailsWithId(response)
        )
      });
      forkJoin(observable).subscribe(pokemons => {
        console.log('pokemons',pokemons)
        this.pokemons = pokemons;
      })
    })
  
  }

}
