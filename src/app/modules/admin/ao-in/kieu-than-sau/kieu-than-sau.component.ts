import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { KieuThanSau } from './kieu-than-sau.model';
import { KieuThanSauService } from './kieu-than-sau.service';

@Component({
  selector: 'app-kieu-than-sau',
  templateUrl: './kieu-than-sau.component.html',
  styleUrls: ['./kieu-than-sau.component.css']
})
export class KieuThanSauComponent implements OnInit {
  datepipe: DatePipe = new DatePipe('en-US')
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly KieuThanSau[] = [];
  listOfCurrentPageData: readonly KieuThanSau[] = [];
  setOfCheckedId = new Set<number>();
  
  constructor(private kieuthansauApi: KieuThanSauService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.kieuthansauApi.list().subscribe((res:any)=>{
      if(res){
        this.listOfData = res;
      }
    })
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly KieuThanSau[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
  }
}
