import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoMiOutComponent } from './so-mi-out.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: SoMiOutComponent,
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    SoMiOutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule
  ]
})
export class SoMiOutModule { }
