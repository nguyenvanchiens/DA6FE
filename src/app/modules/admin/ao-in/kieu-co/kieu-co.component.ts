import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { KieuCo } from './kieu-co.model';
import { KieuCoService } from './kieu-co.service';

@Component({
  selector: 'app-kieu-co',
  templateUrl: './kieu-co.component.html',
  styleUrls: ['./kieu-co.component.css']
})
export class KieuCoComponent implements OnInit {
  datepipe: DatePipe = new DatePipe('en-US')
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly KieuCo[] = [];
  listOfCurrentPageData: readonly KieuCo[] = [];
  setOfCheckedId = new Set<number>();
  
  constructor(private kieucoApi: KieuCoService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.kieucoApi.list().subscribe((res:any)=>{
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

  onCurrentPageDataChange(listOfCurrentPageData: readonly KieuCo[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .forEach(({ maKieuCo }) => this.updateCheckedSet(maKieuCo, checked));
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    this.loading = true;
    const requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.maKieuCo));
    console.log(requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ maKieuCo }) => this.setOfCheckedId.has(maKieuCo));
    this.indeterminate = listOfEnabledData.some(({ maKieuCo }) => this.setOfCheckedId.has(maKieuCo)) && !this.checked;
  }

}
