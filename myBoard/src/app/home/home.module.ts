import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './home-main/home-main.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    HomeMainComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class HomeModule { }
