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

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly KieuTay[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .forEach(({ maKieuTay }) => this.updateCheckedSet(maKieuTay, checked));
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    this.loading = true;
    const requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.maKieuTay));
    console.log(requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ maKieuTay }) => this.setOfCheckedId.has(maKieuTay));
    this.indeterminate = listOfEnabledData.some(({ maKieuTay }) => this.setOfCheckedId.has(maKieuTay)) && !this.checked;
  }
}
