import { Component, OnInit, ViewChild } from '@angular/core';
import { DauRaComponent } from './dau-ra/dau-ra.component';
import { GanOptionComponent } from './gan-option/gan-option.component';
import { LoaiDauRaComponent } from './loai-dau-ra/loai-dau-ra.component';
import { SanPhamComponent } from './san-pham/san-pham.component';

@Component({
  selector: 'app-phu-thuoc',
  templateUrl: './phu-thuoc.component.html',
  styleUrls: ['./phu-thuoc.component.css']
})
export class PhuThuocComponent implements OnInit {
  @ViewChild(SanPhamComponent) sanpham: SanPhamComponent;
  @ViewChild(LoaiDauRaComponent) loaidaura: LoaiDauRaComponent;
  @ViewChild(DauRaComponent) daura: DauRaComponent;
  @ViewChild(GanOptionComponent) option: GanOptionComponent;

  sanphamId = "";
  loaidauraId = "";
  dauraId = "";
  
  current = 0;
  index = 1;

  pre(): void {
    this.current -= 1;
    if (this.index < 4) {
      this.index += 1
    }
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    if (this.index > 0) {
      this.index += 1
    }
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 1;
        break;
      }
      case 1: {
        this.index = 2;
        if(this.sanpham != undefined){
          this.sanphamId = this.sanpham?.defaultSelected;
        }
        else{
          this.sanphamId = "1";
        }
        break;
      }
      case 2: {
        this.index = 3;
        if(this.loaidaura != undefined){
          this.loaidauraId = this.loaidaura?.ldrId;
        }
        else if (this.dauraId) {
          this.loaidauraId = this.dauraId;
        }
        else{
          this.loaidauraId = "0";
        }
        break;
      }
      case 3: {
        this.index = 4;
        this.dauraId = this.daura.dauraId;
        break;
      }
      default: {
        this.index = 0;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
}
