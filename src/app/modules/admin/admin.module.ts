import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path:'',
    component: AdminComponent,
    children:[
      {
        path:'',
        redirectTo:'gioi-thieu'
      },
      {
        path:'gioi-thieu',
        loadChildren: () => import('./gioi-thieu/gioi-thieu.module').then(m=>m.GioiThieuModule)
      },
      {
        path:'so-mi-in',
        loadChildren: () => import('./so-mi-in/so-mi-in.module').then(m=>m.SoMiInModule)
      },
      {
        path:'so-mi-out',
        loadChildren: ()=> import('./so-mi-out/so-mi-out.module').then(m=>m.SoMiOutModule)
      },
      {
        path:'tai-lieu',
        loadChildren: () => import('./tai-lieu/tai-lieu.module').then(m=>m.TaiLieuModule)
      },
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    SharedModule,
    HttpClientModule
  ],
  providers:[]
})
export class AdminModule { }
