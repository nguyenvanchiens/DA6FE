import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { KieuXe } from './kieu-xe.model';
import { KieuXeService } from './kieu-xe.service';

@Component({
  selector: 'app-kieu-xe',
  templateUrl: './kieu-xe.component.html',
  styleUrls: ['./kieu-xe.component.css']
})
export class KieuXeComponent implements OnInit {
  datepipe: DatePipe = new DatePipe('en-US')
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly KieuXe[] = [];
  listOfCurrentPageData: readonly KieuXe[] = [];
  setOfCheckedId = new Set<number>();
  
  constructor(private kieuxeApi: KieuXeService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.kieuxeApi.list().subscribe((res:any)=>{
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

  onCurrentPageDataChange(listOfCurrentPageData: readonly KieuXe[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .forEach(({ maKieuXe }) => this.updateCheckedSet(maKieuXe, checked));
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    this.loading = true;
    const requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.maKieuXe));
    console.log(requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ maKieuXe }) => this.setOfCheckedId.has(maKieuXe));
    this.indeterminate = listOfEnabledData.some(({ maKieuXe }) => this.setOfCheckedId.has(maKieuXe)) && !this.checked;
  }

}
