import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
    { path: 'pokedex', component: PokedexComponent, canActivate: [AuthGuard]},
    { path: 'pokemons', component: PokemonListComponent },
    { path: 'pokemon-details/:id', component: PokemonDetailsComponent },


]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class PokemonRoutingModule { }