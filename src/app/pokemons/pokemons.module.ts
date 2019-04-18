import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { MatListModule } from '@angular/material/list';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { RouterModule } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PokedexComponent } from './pokedex/pokedex.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatIconModule, MatInputModule,
  MatAutocompleteModule, MatChipsModule,
  MatFormFieldModule
} from '@angular/material';


@NgModule({
  declarations: [PokemonListComponent, PokemonDetailsComponent, PokedexComponent],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    PokemonRoutingModule,
    InfiniteScrollModule,
    MatSidenavModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule
  ],
  exports: [
    PokemonListComponent,
    MatListModule
  ]
})
export class PokemonsModule { }
