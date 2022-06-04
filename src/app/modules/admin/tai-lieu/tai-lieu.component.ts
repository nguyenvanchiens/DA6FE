import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { FilterModel } from 'src/app/core/models/filter.model';
import { TaiLieu } from './tai-lieu.model';
import { TaiLieuService } from './tai-lieu.service';

@Component({
  selector: 'app-tai-lieu',
  templateUrl: './tai-lieu.component.html',
  styleUrls: ['./tai-lieu.component.css']
})
export class TaiLieuComponent implements OnInit {
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

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly TaiLieu[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .forEach(({ maFile }) => this.updateCheckedSet(maFile, checked));
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    this.loading = true;
    const requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.maFile));
    console.log(requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ maFile }) => this.setOfCheckedId.has(maFile));
    this.indeterminate = listOfEnabledData.some(({ maFile }) => this.setOfCheckedId.has(maFile)) && !this.checked;
  }
}
