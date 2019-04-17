import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { MatListModule } from '@angular/material/list';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { RouterModule } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [PokemonListComponent, PokemonDetailsComponent],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    PokemonRoutingModule,
    InfiniteScrollModule
  ],
  exports: [
    PokemonListComponent,
    MatListModule
  ]
})
export class PokemonsModule { }
