import { Component, OnInit, ViewChild } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DauRaComponent } from './dau-ra/dau-ra.component';
import { GanOptionComponent } from './gan-option/gan-option.component';
import { LoaiDauRaComponent } from './loai-dau-ra/loai-dau-ra.component';
import { PhuThuoc } from './phu-thuoc.model';
import { PhuThuocService } from './phu-thuoc.service';
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

  constructor(
    private phuthuocApi: PhuThuocService,
    private notifi: NzNotificationService
  ) { }

  ngOnInit(){
  }

  pre(){
    this.current -= 1;
    if (this.index < 4) {
      this.index += 1
    }
    this.changeContent();
  }

  next(){
    this.current += 1;
    if (this.index > 0) {
      this.index += 1
    }
    this.changeContent();
  }

  done(){
    let req : PhuThuoc[] = [];
    let arrTemp = this.option.listResult;
    arrTemp.forEach(e=>{
      let item = new PhuThuoc(e,+this.dauraId, +this.loaidauraId, +this.sanphamId)
      req.push(item)
    })
    var count = 0;
    req.forEach(e=>{
      this.phuthuocApi.Create(e).subscribe(
      (res:any)=>{
        if (res){
          count++;
        }
      },(err)=>{
        this.notifi.error("LỖI","Không thể kết nối đến Server!")
      })
    })
    var message = "Gắn "+ count + " phụ thuộc thành công!";
    this.notifi.success("THÔNG BÁO",message)
  }

  changeContent(){
    switch (this.current) {
      case 0: {
        this.index = 1;
        break;
      }
      case 1: {
        this.index = 2;
        if(this.sanpham != undefined){
          this.sanphamId = this.sanpham?.defaultSelectedSanPham;
        }
        break;
      }
      case 2: {
        this.index = 3;
        if(this.loaidaura != undefined){
          this.loaidauraId = this.loaidaura?.defaultSelectedLoaiDauRa;
        }
        break;
      }
      case 3: {
        this.index = 4;
        this.dauraId = this.daura.defaultSelectedDauRa;
        break;
      }
      default: {
        this.index = 0;
      }
    }
  }
}
