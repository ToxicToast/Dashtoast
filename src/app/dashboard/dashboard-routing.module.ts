import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  //{ path: '', component: DashboardComponent }
  //{ path: '', redirectTo: '/dashboard/characters', pathMatch: 'full' },
  { path: '', component: CharactersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
