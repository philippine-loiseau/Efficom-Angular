import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokedexComponent } from './pokedex/pokedex.component';

const routes: Routes = [
    { path: 'pokedex', component: PokedexComponent },
    { path: '', pathMatch: 'full', redirectTo: 'pokedex' },
    { path: 'pokemons', component: PokemonListComponent },
    { path: 'pokemon-details/:id', component: PokemonDetailsComponent },


]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class PokemonRoutingModule { }