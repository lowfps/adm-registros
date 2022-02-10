import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
// import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { ProgramaComponent } from './programa-academico/programa.academicocomponent';
import { ProcesoComponent } from './proceso/proceso.component';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CrearProgramaComponent } from './crear-programa/crear-programa.component';


@NgModule({
  declarations: [
    ProgramaComponent,
    ProcesoComponent,
    CrearProgramaComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
