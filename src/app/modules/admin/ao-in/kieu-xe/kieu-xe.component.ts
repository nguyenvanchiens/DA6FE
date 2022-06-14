import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { KieuXe } from './kieu-xe.model';
import { KieuXeService } from './kieu-xe.service';

@Component({
  selector: 'app-kieu-xe',
  templateUrl: './kieu-xe.component.html',
  styleUrls: ['./kieu-xe.component.css']
})
export class KieuXeComponent implements OnInit {
  datepipe: DatePipe = new DatePipe('en-US')
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly KieuXe[] = [];
  listOfCurrentPageData: readonly KieuXe[] = [];
  setOfCheckedId = new Set<number>();
  
  constructor(private kieuxeApi: KieuXeService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.kieuxeApi.list().subscribe((res:any)=>{
      if(res){
        this.listOfData = res;
      }
    })
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly KieuXe[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    
  }
}
