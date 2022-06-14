import { Component, OnInit, ViewChild } from '@angular/core';
import { DauRaComponent } from './dau-ra/dau-ra.component';
import { DauVaoComponent } from './dau-vao/dau-vao.component';
import { LoaiDauRaComponent } from './loai-dau-ra/loai-dau-ra.component';

@Component({
  selector: 'app-ao-out',
  templateUrl: './ao-out.component.html',
  styleUrls: ['./ao-out.component.css']
})
export class AoOutComponent implements OnInit {
  @ViewChild(LoaiDauRaComponent) loaidaura: LoaiDauRaComponent;
  @ViewChild(DauRaComponent) daura: DauRaComponent;
  @ViewChild(DauVaoComponent) option: DauVaoComponent;

  sanphamId = "";
  loaidauraId = "";
  dauvaoId = "";

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
        if(this.loaidaura != undefined){
          this.loaidauraId = this.loaidaura.defaultSelectedLoaiDauRa;
        }
        else{
          this.loaidauraId = "0";
        }
        break;
      }
      case 2: {
        this.index = 3;
        break;
      }
      case 3: {
        this.index = 4;
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
