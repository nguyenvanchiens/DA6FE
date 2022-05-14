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
import { ThanhPhanVaiMotComponent } from './thanh-phan-vai-mot/thanh-phan-vai-mot.component';
import { ThanhPhanVaiHaiComponent } from './thanh-phan-vai-hai/thanh-phan-vai-hai.component';
import { ThanhPhanVaiBaComponent } from './thanh-phan-vai-ba/thanh-phan-vai-ba.component';

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
    ThanhPhanVaiMotComponent,
    ThanhPhanVaiHaiComponent,
    ThanhPhanVaiBaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    SharedModule
  ]
})
export class AoInModule { }
