import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './core/guards/authentication.guard';

const routes: Routes = [
  {
    path:'login',
    loadChildren: () => import('./modules/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'admin',
    canActivate:[AuthenticationGuard],
    canActivateChild:[AuthenticationGuard],
    loadChildren: () => import('./modules/admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:'**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
