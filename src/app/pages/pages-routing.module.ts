import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountFormComponent } from './account-form/account-form.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
    { path: 'signup', component: AccountFormComponent},
    { path: '', pathMatch: 'full', redirectTo: 'signup' },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [], 
    declarations: [],
})
export class PagesRoutingModule { }