import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { KieuCo } from './kieu-co.model';
import { KieuCoService } from './kieu-co.service';

@Component({
  selector: 'app-kieu-co',
  templateUrl: './kieu-co.component.html',
  styleUrls: ['./kieu-co.component.css']
})
export class KieuCoComponent implements OnInit {
  datepipe: DatePipe = new DatePipe('en-US')
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly KieuCo[] = [];
  listOfCurrentPageData: readonly KieuCo[] = [];
  setOfCheckedId = new Set<number>();
  
  constructor(private kieucoApi: KieuCoService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.kieucoApi.list().subscribe((res:any)=>{
      if(res){
        this.listOfData = res;
      }
    })
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly KieuCo[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
  }
}
