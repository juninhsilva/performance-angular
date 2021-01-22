import { ListExempleRoutingModule } from './list-exemple-routing.module';
import { ListExempleComponent } from './list-exemple.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ListExempleComponent],
  imports: [
    CommonModule,
    ListExempleRoutingModule
  ]
})
export class ListExempleModule { }
