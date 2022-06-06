import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhuThuocComponent } from './phu-thuoc.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApiService } from 'src/app/core/services/api.service';
import { SanPhamComponent } from './san-pham/san-pham.component';
import { LoaiDauRaComponent } from './loai-dau-ra/loai-dau-ra.component';
import { DauRaComponent } from './dau-ra/dau-ra.component';
import { GanOptionComponent } from './gan-option/gan-option.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'',
    component: PhuThuocComponent,
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    PhuThuocComponent,
    SanPhamComponent,
    LoaiDauRaComponent,
    DauRaComponent,
    GanOptionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    ApiService
  ]
})
export class PhuThuocModule { }
