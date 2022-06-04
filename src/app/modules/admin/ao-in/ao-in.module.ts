import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AoInComponent } from './ao-in.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { KieuTayComponent } from './kieu-tay/kieu-tay.component';
import { KieuAoComponent } from './kieu-ao/kieu-ao.component';
import { KieuThepTayComponent } from './kieu-thep-tay/kieu-thep-tay.component';
import { KieuCoComponent } from './kieu-co/kieu-co.component';
import { KieuTuiComponent } from './kieu-tui/kieu-tui.component';
import { KieuNepComponent } from './kieu-nep/kieu-nep.component';
import { KieuThanTruocComponent } from './kieu-than-truoc/kieu-than-truoc.component';
import { KieuXeComponent } from './kieu-xe/kieu-xe.component';
import { KieuThanSauComponent } from './kieu-than-sau/kieu-than-sau.component';
import { ThanhPhanVaiComponent } from './thanh-phan-vai/thanh-phan-vai.component';
import { KieuAoService } from './kieu-ao/kieu-ao.service';
import { ApiService } from 'src/app/core/services/api.service';

const routes: Routes = [
  {
    path:'',
    component: AoInComponent,
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    AoInComponent,
    KieuTayComponent,
    KieuAoComponent,
    KieuThepTayComponent,
    KieuCoComponent,
    KieuTuiComponent,
    KieuNepComponent,
    KieuThanTruocComponent,
    KieuXeComponent,
    KieuThanSauComponent,
    ThanhPhanVaiComponent,
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
export class AoInModule { }
