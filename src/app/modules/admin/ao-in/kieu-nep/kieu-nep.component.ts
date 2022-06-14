import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { KieuNep } from './kieu-nep.model';
import { KieuNepService } from './kieu-nep.service';

@Component({
  selector: 'app-kieu-nep',
  templateUrl: './kieu-nep.component.html',
  styleUrls: ['./kieu-nep.component.css']
})
export class KieuNepComponent implements OnInit {
  datepipe: DatePipe = new DatePipe('en-US')
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly KieuNep[] = [];
  listOfCurrentPageData: readonly KieuNep[] = [];
  setOfCheckedId = new Set<number>();
  
  constructor(private kieunepApi: KieuNepService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.kieunepApi.list().subscribe((res:any)=>{
      if(res){
        this.listOfData = res;
      }
    })
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly KieuNep[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
  }
}
