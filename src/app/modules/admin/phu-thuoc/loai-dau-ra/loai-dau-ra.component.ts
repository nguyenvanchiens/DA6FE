import { Component, Input, OnInit } from '@angular/core';
import { LoaiDauRa } from './loai-dau-ra.model';
import { LoaiDauRaService } from './loai-dau-ra.service';

@Component({
  selector: 'app-loai-dau-ra',
  templateUrl: './loai-dau-ra.component.html',
  styleUrls: ['./loai-dau-ra.component.css']
})
export class LoaiDauRaComponent implements OnInit {
  @Input() sanphamId: string;
  listOfData: readonly LoaiDauRa[] = [];
  defaultSelectedLoaiDauRa = ''
  constructor(
    private loaidauraApi: LoaiDauRaService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.loaidauraApi.list(this.sanphamId).subscribe((res:any)=>{
      if(res){
        this.listOfData = res;
      }
    })
  }
}
