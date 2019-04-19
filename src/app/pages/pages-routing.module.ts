import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountFormComponent } from './account-form/account-form.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
    { path: 'signup', component: AccountFormComponent},
    { path: 'team', component: TeamComponent, canActivate: [AuthGuard]}

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [], 
    declarations: [],
})
export class PagesRoutingModule { }