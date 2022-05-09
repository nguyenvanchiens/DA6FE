import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoMiInComponent } from './so-mi-in.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: SoMiInComponent,
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    SoMiInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule
  ]
})
export class SoMiInModule { }
