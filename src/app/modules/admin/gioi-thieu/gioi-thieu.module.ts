import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GioiThieuComponent } from './gioi-thieu.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: GioiThieuComponent,
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    GioiThieuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule
  ]
})
export class GioiThieuModule { }
