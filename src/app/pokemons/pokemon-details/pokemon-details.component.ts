import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  private id;
  public pokemon;
  public types;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPokemonDetail(this.id);
  }

  getPokemonDetail(id) {
    this.pokemonService.getPokemonDetailsWithId(id).subscribe(data =>  {
      this.pokemon = data;
      this.types = data.types;
    }, error => {
      Observable.throw(error);
    })
  }

  playAudio() {
      let audio = new Audio();
      audio.src = "../../../assets/audio/"+this.id+".mp3";
      audio.load();
      audio.play();
  }

}
