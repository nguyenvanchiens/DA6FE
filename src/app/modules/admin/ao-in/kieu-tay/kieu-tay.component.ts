import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { KieuTay } from './kieu-tay.model';

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
  
  constructor() { }

  ngOnInit(): void {
    this.listOfData = [
      {
        maKieuTay : 1,
        tenKieu : "Kiểu tay 1",
        createdDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY'),
        modifiedDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY')
      },
      {
        maKieuTay : 2,
        tenKieu : "Kiểu tay 2",
        createdDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY'),
        modifiedDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY')
      },
      {
        maKieuTay : 3,
        tenKieu : "Kiểu tay 3",
        createdDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY'),
        modifiedDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY')
      },
      {
        maKieuTay : 4,
        tenKieu : "Kiểu tay 4",
        createdDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY'),
        modifiedDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY')
      },
      {
        maKieuTay : 5,
        tenKieu : "Kiểu tay 3",
        createdDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY'),
        modifiedDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY')
      },
      {
        maKieuTay : 6,
        tenKieu : "Kiểu tay 4",
        createdDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY'),
        modifiedDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY')
      },
      {
        maKieuTay : 7,
        tenKieu : "Kiểu tay 3",
        createdDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY'),
        modifiedDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY')
      },
      {
        maKieuTay : 8,
        tenKieu : "Kiểu tay 4",
        createdDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY'),
        modifiedDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY')
      },
      {
        maKieuTay : 9,
        tenKieu : "Kiểu tay 3",
        createdDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY'),
        modifiedDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY')
      },
      {
        maKieuTay : 10,
        tenKieu : "Kiểu tay 4",
        createdDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY'),
        modifiedDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY')
      },
      {
        maKieuTay : 11,
        tenKieu : "Kiểu tay 3",
        createdDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY'),
        modifiedDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY')
      },
      {
        maKieuTay : 12,
        tenKieu : "Kiểu tay 4",
        createdDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY'),
        modifiedDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY')
      },
      {
        maKieuTay : 13,
        tenKieu : "Kiểu tay 3",
        createdDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY'),
        modifiedDate : this.datepipe.transform(new Date(), 'dd-MMM-YYYY')
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
