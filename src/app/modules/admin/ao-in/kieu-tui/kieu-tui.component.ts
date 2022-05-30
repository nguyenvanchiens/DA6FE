import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { KieuTui } from './kieu-tui.model';
import { KieuTuiService } from './kieu-tui.service';

@Component({
  selector: 'app-kieu-tui',
  templateUrl: './kieu-tui.component.html',
  styleUrls: ['./kieu-tui.component.css']
})
export class KieuTuiComponent implements OnInit {
  datepipe: DatePipe = new DatePipe('en-US')
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly KieuTui[] = [];
  listOfCurrentPageData: readonly KieuTui[] = [];
  setOfCheckedId = new Set<number>();
  
  constructor(private kieuTuiApi: KieuTuiService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.kieuTuiApi.list().subscribe((res:any)=>{
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

  onCurrentPageDataChange(listOfCurrentPageData: readonly KieuTui[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .forEach(({ maKieuTui }) => this.updateCheckedSet(maKieuTui, checked));
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    this.loading = true;
    const requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.maKieuTui));
    console.log(requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ maKieuTui }) => this.setOfCheckedId.has(maKieuTui));
    this.indeterminate = listOfEnabledData.some(({ maKieuTui }) => this.setOfCheckedId.has(maKieuTui)) && !this.checked;
  }


}
