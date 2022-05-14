import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AoOutComponent } from './ao-out.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: AoOutComponent,
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    AoOutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule
  ]
})
export class AoOutModule { }
