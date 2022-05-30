import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { KieuNep } from './kieu-nep.model';
import { KieuNepService } from './kieu-nep.service';

@Component({
  selector: 'app-kieu-nep',
  templateUrl: './kieu-nep.component.html',
  styleUrls: ['./kieu-nep.component.css']
})
export class KieuNepComponent implements OnInit {
  datepipe: DatePipe = new DatePipe('en-US')
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly KieuNep[] = [];
  listOfCurrentPageData: readonly KieuNep[] = [];
  setOfCheckedId = new Set<number>();
  
  constructor(private kieunepApi: KieuNepService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.kieunepApi.list().subscribe((res:any)=>{
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

  onCurrentPageDataChange(listOfCurrentPageData: readonly KieuNep[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .forEach(({ maKieuNep }) => this.updateCheckedSet(maKieuNep, checked));
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    this.loading = true;
    const requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.maKieuNep));
    console.log(requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ maKieuNep }) => this.setOfCheckedId.has(maKieuNep));
    this.indeterminate = listOfEnabledData.some(({ maKieuNep }) => this.setOfCheckedId.has(maKieuNep)) && !this.checked;
  }
}
