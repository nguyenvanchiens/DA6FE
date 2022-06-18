import { Component, Input, OnInit } from '@angular/core';
import { Options } from './gan-option.model';
import { OptionService } from './gan-option.service';
@Component({
  selector: 'app-gan-option',
  templateUrl: './gan-option.component.html',
  styleUrls: ['./gan-option.component.css']
})
export class GanOptionComponent implements OnInit {
  @Input() loaidauraId: string;
  listOfData: Options[] = [];
  listResult: any[] = [];
  constructor(
    private optionApi: OptionService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.optionApi.list().subscribe((res: any) => {
      if (res) {
        res.forEach(element => {
          let option = new Options(element.value, element.lable)
          this.listOfData.push(option)
        });
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

