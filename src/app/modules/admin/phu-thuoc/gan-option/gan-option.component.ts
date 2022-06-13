import { Component, Input, OnInit } from '@angular/core';
import { Options } from './gan-option.model';
import { OptionService } from './gan-option.service';
@Component({
  selector: 'app-gan-option',
  templateUrl: './gan-option.component.html',
  styleUrls: ['./gan-option.component.css']
})
export class GanOptionComponent implements OnInit {
  @Input() dauraId: string;
  listOfData: Options[] = [];
  constructor(
    private optionApi: OptionService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.optionApi.list().subscribe((res:any)=>{
      if(res){
        res.forEach(element => {
          let option = new Options(element.value, element.lable)
          this.listOfData.push(option)
        });
      }
    })
  }

  checked(list: any[]): void {
    let result = list.filter((e) => {
      return e.checked == true;
    });
  }
}

