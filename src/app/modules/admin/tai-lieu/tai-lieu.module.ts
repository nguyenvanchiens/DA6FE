import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaiLieuComponent } from './tai-lieu.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: TaiLieuComponent,
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    TaiLieuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule
  ]
})
export class TaiLieuModule { }
