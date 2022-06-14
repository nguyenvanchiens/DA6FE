import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { KieuTui } from './kieu-tui.model';
import { KieuTuiService } from './kieu-tui.service';

@Component({
  selector: 'app-kieu-tui',
  templateUrl: './kieu-tui.component.html',
  styleUrls: ['./kieu-tui.component.css']
})
export class KieuTuiComponent implements OnInit {
  datepipe: DatePipe = new DatePipe('en-US')
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly KieuTui[] = [];
  listOfCurrentPageData: readonly KieuTui[] = [];
  setOfCheckedId = new Set<number>();
  
  constructor(private kieuTuiApi: KieuTuiService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.kieuTuiApi.list().subscribe((res:any)=>{
      if(res){
        this.listOfData = res;
      }
    })
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly KieuTui[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    
  }
}
