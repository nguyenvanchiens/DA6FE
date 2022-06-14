import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FilterModel } from 'src/app/core/models/filter.model';
import { TaiLieu } from './tai-lieu.model';
import { TaiLieuService } from './tai-lieu.service';

@Component({
  selector: 'app-tai-lieu',
  templateUrl: './tai-lieu.component.html',
  styleUrls: ['./tai-lieu.component.css']
})
export class TaiLieuComponent implements OnInit {
  visible = false;
  datepipe: DatePipe = new DatePipe('en-US')
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly TaiLieu[] = [];
  listOfCurrentPageData: readonly TaiLieu[] = [];
  setOfCheckedId = new Set<number>();
  filter = new FilterModel();
  keyword = '';

  constructor(private tailieuApi: TaiLieuService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.filter.keyword = this.keyword;
    this.tailieuApi.list(this.filter).subscribe((res:any)=>{
      if(res){
        console.log(res)
        this.listOfData = res.items;
      }
    })
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly TaiLieu[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
  }

  reset(): void {
    this.keyword = '';
    this.getList()
  }

  search(): void {
    this.visible = false;
    this.getList()
    this.listOfData = this.listOfData.filter((item: TaiLieu) => item.tenFile.indexOf(this.keyword) !== -1);
  }
}
