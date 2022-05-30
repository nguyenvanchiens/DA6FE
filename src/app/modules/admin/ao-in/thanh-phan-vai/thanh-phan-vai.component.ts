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

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly ThanhPhanVai[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .forEach(({ maThanhPhanVai }) => this.updateCheckedSet(maThanhPhanVai, checked));
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    this.loading = true;
    const requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.maThanhPhanVai));
    console.log(requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ maThanhPhanVai }) => this.setOfCheckedId.has(maThanhPhanVai));
    this.indeterminate = listOfEnabledData.some(({ maThanhPhanVai }) => this.setOfCheckedId.has(maThanhPhanVai)) && !this.checked;
  }

}
