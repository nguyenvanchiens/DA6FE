import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { KieuThanTruoc } from './kieu-than-truoc.model';
import { KieuThanTruocService } from './kieu-than-truoc.service';

@Component({
  selector: 'app-kieu-than-truoc',
  templateUrl: './kieu-than-truoc.component.html',
  styleUrls: ['./kieu-than-truoc.component.css']
})
export class KieuThanTruocComponent implements OnInit {
  datepipe: DatePipe = new DatePipe('en-US')
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly KieuThanTruoc[] = [];
  listOfCurrentPageData: readonly KieuThanTruoc[] = [];
  setOfCheckedId = new Set<number>();
  
  constructor(private kieuthantruocApi: KieuThanTruocService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.kieuthantruocApi.list().subscribe((res:any)=>{
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

  onCurrentPageDataChange(listOfCurrentPageData: readonly KieuThanTruoc[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .forEach(({ maKieuThanTruoc }) => this.updateCheckedSet(maKieuThanTruoc, checked));
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    this.loading = true;
    const requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.maKieuThanTruoc));
    console.log(requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ maKieuThanTruoc }) => this.setOfCheckedId.has(maKieuThanTruoc));
    this.indeterminate = listOfEnabledData.some(({ maKieuThanTruoc }) => this.setOfCheckedId.has(maKieuThanTruoc)) && !this.checked;
  }


}
