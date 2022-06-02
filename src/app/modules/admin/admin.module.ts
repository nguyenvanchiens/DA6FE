import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthenticationGuard } from 'src/app/core/guards/authentication.guard';

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
        canActivate:[AuthenticationGuard],
        canActivateChild:[AuthenticationGuard],
        loadChildren: () => import('./gioi-thieu/gioi-thieu.module').then(m=>m.GioiThieuModule)
      },
      {
        path:'ao-in',
        canActivate:[AuthenticationGuard],
        canActivateChild:[AuthenticationGuard],
        loadChildren: () => import('./ao-in/ao-in.module').then(m=>m.AoInModule)
      },
      {
        path:'ao-out',
        canActivate:[AuthenticationGuard],
        canActivateChild:[AuthenticationGuard],
        loadChildren: ()=> import('./ao-out/ao-out.module').then(m=>m.AoOutModule)
      },
      {
        path:'tai-lieu',
        canActivate:[AuthenticationGuard],
        canActivateChild:[AuthenticationGuard],
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
    HttpClientModule,
  ],
  providers:[
    ApiService,
  ]
})
export class AdminModule { }
