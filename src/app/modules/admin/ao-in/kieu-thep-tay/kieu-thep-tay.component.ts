import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { KieuThepTay } from './kieu-thep-tay.model';
import { KieuThepTayService } from './kieu-thep-tay.service';

@Component({
  selector: 'app-kieu-thep-tay',
  templateUrl: './kieu-thep-tay.component.html',
  styleUrls: ['./kieu-thep-tay.component.css']
})
export class KieuThepTayComponent implements OnInit {
  datepipe: DatePipe = new DatePipe('en-US')
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly KieuThepTay[] = [];
  listOfCurrentPageData: readonly KieuThepTay[] = [];
  setOfCheckedId = new Set<number>();
  
  constructor(private kieutheptayApi: KieuThepTayService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.kieutheptayApi.list().subscribe((res:any)=>{
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

  onCurrentPageDataChange(listOfCurrentPageData: readonly KieuThepTay[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .forEach(({ maKieuCuaTay }) => this.updateCheckedSet(maKieuCuaTay, checked));
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    this.loading = true;
    const requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.maKieuCuaTay));
    console.log(requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ maKieuCuaTay }) => this.setOfCheckedId.has(maKieuCuaTay));
    this.indeterminate = listOfEnabledData.some(({ maKieuCuaTay }) => this.setOfCheckedId.has(maKieuCuaTay)) && !this.checked;
  }

}
