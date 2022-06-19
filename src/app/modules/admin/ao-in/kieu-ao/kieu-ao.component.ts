import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { KieuAo } from './kieu-ao.model';
import { KieuAoService } from './kieu-ao.service';

@Component({
  selector: 'app-kieu-ao',
  templateUrl: './kieu-ao.component.html',
  styleUrls: ['./kieu-ao.component.css']
})
export class KieuAoComponent implements OnInit {
  datepipe: DatePipe = new DatePipe('en-US')
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly KieuAo[] = [];
  listOfCurrentPageData: readonly KieuAo[] = [];
  setOfCheckedId = new Set<number>();

  constructor(private kieuAoApi: KieuAoService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.kieuAoApi.list().subscribe((res:any)=>{
      if(res){
        this.listOfData = res;
      }
    })
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly KieuAo[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
  }
}
