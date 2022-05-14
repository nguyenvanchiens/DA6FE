import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoMiInComponent } from './so-mi-in.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { KieuTayComponent } from './kieu-tay/kieu-tay.component';

const routes: Routes = [
  {
    path:'',
    component: SoMiInComponent,
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    SoMiInComponent,
    KieuTayComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    SharedModule
  ]
})
export class SoMiInModule { }
