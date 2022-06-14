import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ThanhPhanVai } from './thanh-phan-vai.model';
import { ThanhPhanVaiService } from './thanh-phan-vai.service';

@Component({
  selector: 'app-thanh-phan-vai',
  templateUrl: './thanh-phan-vai.component.html',
  styleUrls: ['./thanh-phan-vai.component.css']
})
export class ThanhPhanVaiComponent implements OnInit {
  datepipe: DatePipe = new DatePipe('en-US')
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly ThanhPhanVai[] = [];
  listOfCurrentPageData: readonly ThanhPhanVai[] = [];
  setOfCheckedId = new Set<number>();
  
  constructor(private thanhphanvaiApi: ThanhPhanVaiService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.thanhphanvaiApi.list().subscribe((res:any)=>{
      if(res){
        this.listOfData = res;
      }
    })
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly ThanhPhanVai[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
  }
}
