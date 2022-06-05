import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AoOutComponent } from './ao-out.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DauVaoComponent } from './dau-vao/dau-vao.component';
import { KetQuaComponent } from './ket-qua/ket-qua.component';
import { FormsModule } from '@angular/forms';
import { DauRaComponent } from './dau-ra/dau-ra.component';
import { DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';
import { LoaiDauRaComponent } from './loai-dau-ra/loai-dau-ra.component';

const routes: Routes = [
  {
    path:'',
    component: AoOutComponent,
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    AoOutComponent,
    DauVaoComponent,
    KetQuaComponent,
    DauRaComponent,
    LoaiDauRaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    SharedModule,
    FormsModule,
    DocumentEditorContainerModule
  ]
})
export class AoOutModule { }
