import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { KieuThanTruoc } from './kieu-than-truoc.model';
import { KieuThanTruocService } from './kieu-than-truoc.service';

@Component({
  selector: 'app-kieu-than-truoc',
  templateUrl: './kieu-than-truoc.component.html',
  styleUrls: ['./kieu-than-truoc.component.css']
})
export class KieuThanTruocComponent implements OnInit {
  datepipe: DatePipe = new DatePipe('en-US')
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly KieuThanTruoc[] = [];
  listOfCurrentPageData: readonly KieuThanTruoc[] = [];
  setOfCheckedId = new Set<number>();
  
  constructor(private kieuthantruocApi: KieuThanTruocService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.kieuthantruocApi.list().subscribe((res:any)=>{
      if(res){
        this.listOfData = res;
      }
    })
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly KieuThanTruoc[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    
  }
}
