import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { KieuTay } from './kieu-tay.model';
import { KieuTayService } from './kieu-tay.service';

@Component({
  selector: 'app-kieu-tay',
  templateUrl: './kieu-tay.component.html',
  styleUrls: ['./kieu-tay.component.css']
})
export class KieuTayComponent implements OnInit {
  datepipe: DatePipe = new DatePipe('en-US')
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly KieuTay[] = [];
  listOfCurrentPageData: readonly KieuTay[] = [];
  setOfCheckedId = new Set<number>();
  
  constructor(private kieutayApi: KieuTayService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.kieutayApi.list().subscribe((res:any)=>{
      if(res){
        this.listOfData = res;
      }
    })
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly KieuTay[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
  }
}
