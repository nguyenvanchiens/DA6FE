import { Component, Input, OnInit } from '@angular/core';
import { DauVao } from './dau-vao.model';
import { DauVaoService } from './dau-vao.service';

@Component({
  selector: 'app-dau-vao',
  templateUrl: './dau-vao.component.html',
  styleUrls: ['./dau-vao.component.css']
})
export class DauVaoComponent implements OnInit {
  @Input() dauraId: string;
  @Input() loaidauraId: string;
  listOfData: DauVao[] = [];
  valueOfInput: any;
  value = '';
  selectedValue = '';
  constructor(
    private dauvaoApi: DauVaoService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.dauvaoApi.list(+this.dauraId,+this.loaidauraId).subscribe((data)=>{
      if (data){
        this.listOfData = data;
        this.listOfData.forEach((e)=>{
          if(e.type == 0){
            this.dauvaoApi.input(e.tenOptionDauRa).subscribe(res=>e.type = res)
          }
        })
      }
    })
  }
}
