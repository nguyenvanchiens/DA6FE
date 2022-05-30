import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { KieuThanSau } from './kieu-than-sau.model';
import { KieuThanSauService } from './kieu-than-sau.service';

@Component({
  selector: 'app-kieu-than-sau',
  templateUrl: './kieu-than-sau.component.html',
  styleUrls: ['./kieu-than-sau.component.css']
})
export class KieuThanSauComponent implements OnInit {
  datepipe: DatePipe = new DatePipe('en-US')
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly KieuThanSau[] = [];
  listOfCurrentPageData: readonly KieuThanSau[] = [];
  setOfCheckedId = new Set<number>();
  
  constructor(private kieuthansauApi: KieuThanSauService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.kieuthansauApi.list().subscribe((res:any)=>{
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

  onCurrentPageDataChange(listOfCurrentPageData: readonly KieuThanSau[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .forEach(({ maKieuThanSau }) => this.updateCheckedSet(maKieuThanSau, checked));
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    this.loading = true;
    const requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.maKieuThanSau));
    console.log(requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ maKieuThanSau }) => this.setOfCheckedId.has(maKieuThanSau));
    this.indeterminate = listOfEnabledData.some(({ maKieuThanSau }) => this.setOfCheckedId.has(maKieuThanSau)) && !this.checked;
  }

}
