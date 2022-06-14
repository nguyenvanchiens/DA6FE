import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { KieuThepTay } from './kieu-thep-tay.model';
import { KieuThepTayService } from './kieu-thep-tay.service';

@Component({
  selector: 'app-kieu-thep-tay',
  templateUrl: './kieu-thep-tay.component.html',
  styleUrls: ['./kieu-thep-tay.component.css']
})
export class KieuThepTayComponent implements OnInit {
  datepipe: DatePipe = new DatePipe('en-US')
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly KieuThepTay[] = [];
  listOfCurrentPageData: readonly KieuThepTay[] = [];
  setOfCheckedId = new Set<number>();
  
  constructor(private kieutheptayApi: KieuThepTayService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.kieutheptayApi.list().subscribe((res:any)=>{
      if(res){
        this.listOfData = res;
      }
    })
  }
  
  onCurrentPageDataChange(listOfCurrentPageData: readonly KieuThepTay[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    
  }
}
