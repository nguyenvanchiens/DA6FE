import { Component, Input, OnInit } from '@angular/core';
import { DauVao, InputOption } from './dau-vao.model';
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

  async getList() {
    const dauvao = await this.dauvaoApi.list(+this.dauraId,+this.loaidauraId).toPromise()
    const data:DauVao[] = await Promise.all(dauvao.map( async e=>{
      if (e.type == 0){
        const input = await this.dauvaoApi.input(e.tenOptionDauRa).toPromise()
        e.input = input
      }
      return e
    }))
    this.listOfData = data;
  }
}
