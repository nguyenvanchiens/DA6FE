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
      }
    })
  }
}
