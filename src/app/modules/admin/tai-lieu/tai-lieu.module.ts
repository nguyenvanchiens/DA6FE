import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaiLieuComponent } from './tai-lieu.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApiService } from 'src/app/core/services/api.service';

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
    RouterModule,
    SharedModule
  ],
  providers: [
    ApiService
  ]
})
export class TaiLieuModule { }
