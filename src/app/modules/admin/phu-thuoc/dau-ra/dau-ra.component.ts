import { Component, Input, OnInit } from '@angular/core';
import { DauRa } from './dau-ra.model';
import { DauRaService } from './dau-ra.service';

@Component({
  selector: 'app-dau-ra',
  templateUrl: './dau-ra.component.html',
  styleUrls: ['./dau-ra.component.css']
})
export class DauRaComponent implements OnInit {
  @Input() loaidauraId: string;
  dauraId = ''
  listOfData: readonly DauRa[] = [];
  constructor(
    private dauraApi: DauRaService
  ) { }

  ngOnInit(): void {
    this.dauraId = this.loaidauraId;
    this.getList();
  }

  getList(){
    this.dauraApi.list(this.loaidauraId).subscribe((res:any)=>{
      if(res){
        this.listOfData = res;
      }
    })
  }
}
