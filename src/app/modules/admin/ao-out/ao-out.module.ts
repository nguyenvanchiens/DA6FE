import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AoOutComponent } from './ao-out.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoaiAoComponent } from './loai-ao/loai-ao.component';
import { DauVaoComponent } from './dau-vao/dau-vao.component';
import { KetQuaComponent } from './ket-qua/ket-qua.component';
import { FormsModule } from '@angular/forms';
import { DauRaComponent } from './dau-ra/dau-ra.component';

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
    LoaiAoComponent,
    DauVaoComponent,
    KetQuaComponent,
    DauRaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    SharedModule,
    FormsModule
  ]
})
export class AoOutModule { }
