import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
  ],
  declarations: [CharactersComponent, DashboardComponent],
  providers: [NbSidebarService]
})
export class DashboardModule { }
