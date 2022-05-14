import { Component, OnInit } from '@angular/core';
import { time } from 'console';
import { KieuTay } from './kieu-tay.model';

@Component({
  selector: 'app-kieu-tay',
  templateUrl: './kieu-tay.component.html',
  styleUrls: ['./kieu-tay.component.css']
})
export class KieuTayComponent implements OnInit {
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly KieuTay[] = [];
  listOfCurrentPageData: readonly KieuTay[] = [];
  setOfCheckedId = new Set<number>();
  
  constructor() { }

  ngOnInit(): void {
    this.listOfData = [
      {
        maKieuTay : 1,
        tenKieu : "2",
        createdDate : Date.now.toString(),
        modifiedDate : Date.now.toString()
      },
    ]
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
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .forEach(({ maKieuTay }) => this.updateCheckedSet(maKieuTay, checked));
  }

  sendRequest(): void {
    this.loading = true;
    const requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.maKieuTay));
    console.log(requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.loading = false;
    }, 1000);
  }

}
