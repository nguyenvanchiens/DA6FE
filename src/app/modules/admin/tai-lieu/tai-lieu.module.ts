import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaiLieuComponent } from './tai-lieu.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApiService } from 'src/app/core/services/api.service';
import { FormsModule } from '@angular/forms';
import { DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';
import { ChiTietComponent } from './chi-tiet/chi-tiet.component';

const routes: Routes = [
  {
    path:'',
    component: TaiLieuComponent,
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    TaiLieuComponent,
    ChiTietComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    SharedModule,
    FormsModule,
    DocumentEditorContainerModule
  ],
  providers: [
    ApiService
  ]
})
export class TaiLieuModule { }
