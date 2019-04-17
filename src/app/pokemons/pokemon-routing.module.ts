import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes: Routes = [
    { path: 'pokemons', component: PokemonListComponent },
    { path: '', pathMatch: 'full', redirectTo: 'pokemons' },
    { path: 'pokemon-details/:id', component: PokemonDetailsComponent },


]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class PokemonRoutingModule { }