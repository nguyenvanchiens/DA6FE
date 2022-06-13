import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { SanPham } from './san-pham.model';
import { SanPhamService } from './san-pham.service';

@Component({
  selector: 'app-san-pham',
  templateUrl: './san-pham.component.html',
  styleUrls: ['./san-pham.component.css']
})
export class SanPhamComponent implements OnInit {
  defaultSelectedSanPham = "1";
  listOfData: readonly SanPham[] = [];

  constructor(
    private sanphamApi: SanPhamService
  ) { }

  ngOnInit(): void {
    this.defaultSelectedSanPham = '1';
    this.getList();
  }

  getList(){
    this.sanphamApi.list().subscribe((res:any)=>{
      if(res){
        this.listOfData = res;
      }
    })
  }
}
