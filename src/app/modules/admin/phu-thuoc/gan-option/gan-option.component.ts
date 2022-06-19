import { Component, Input, OnInit } from '@angular/core';
import { PhuThuoc } from '../phu-thuoc.model';
import { OptionPhuThuoc, Options } from './gan-option.model';
import { OptionService } from './gan-option.service';
@Component({
  selector: 'app-gan-option',
  templateUrl: './gan-option.component.html',
  styleUrls: ['./gan-option.component.css']
})
export class GanOptionComponent implements OnInit {
  @Input() loaidauraId: string;
  @Input() dauraId: string;
  listOfData: Options[] = [];
  listResult: any[] = [];
  constructor(
    private optionApi: OptionService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.optionApi.list(+this.dauraId,+this.loaidauraId).subscribe((res) => {
      if (res) {
        this.listOfData = res
      }
    })
  }

  checked(list: any[]) {
    this.listResult = list.filter((e) => { return e.checked == true })
      .map((e) => {
        return e.value;
      })
  }
}

