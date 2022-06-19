import { DatePipe } from '@angular/common';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FilterModel } from 'src/app/core/models/filter.model';
import { ChiTietComponent } from './chi-tiet/chi-tiet.component';
import { TaiLieu } from './tai-lieu.model';
import { TaiLieuService } from './tai-lieu.service';

@Component({
  selector: 'app-tai-lieu',
  templateUrl: './tai-lieu.component.html',
  styleUrls: ['./tai-lieu.component.css']
})
export class TaiLieuComponent implements OnInit {
  @ViewChild(ChiTietComponent) chitiet: ChiTietComponent;

  visible = false;
  datepipe: DatePipe = new DatePipe('en-US')
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly TaiLieu[] = [];
  listOfCurrentPageData: readonly TaiLieu[] = [];
  setOfCheckedId = new Set<number>();
  filter = new FilterModel();
  keyword = '';
  status = false;

  constructor(
    private tailieuApi: TaiLieuService,
    private msg: NzMessageService,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.filter.keyword = this.keyword;
    this.tailieuApi.list(this.filter).subscribe((res:any)=>{
      if(res){
        this.listOfData = res.items;
      }
    })
  }

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} Tải lên tài liệu thành công.`);
      this.getList();
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} Tải lên tài liệu thất bại.`);
    }
  }
  onCurrentPageDataChange(listOfCurrentPageData: readonly TaiLieu[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
  }

  reset(): void {
    this.keyword = '';
    this.getList()
  }

  search(): void {
    this.visible = false;
    this.getList()
    this.listOfData = this.listOfData.filter((item: TaiLieu) => item.tenFile.indexOf(this.keyword) !== -1);
  }

  changeStatus($event:boolean){
    if($event == false){
      this.getList();
    }
    this.status = $event;
  }

  view(tenfile:string){
    this.tailieuApi.download(tenfile).subscribe((data:any)=>{
      if(data){
        const file = new File([data], tenfile, {
          type: data.type,
        });
        this.chitiet.showTaiLieu(file);
      }
    })
  }
}
