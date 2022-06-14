import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToolbarService } from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-chi-tiet',
  templateUrl: './chi-tiet.component.html',
  styleUrls: ['./chi-tiet.component.css'],
  providers: [ToolbarService]
})
export class ChiTietComponent implements OnInit {
  @Output() isShow = new EventEmitter<boolean>();
  status : boolean;
  constructor(
    private http : HttpClient
  ) { }

  ngOnInit(): void {
    this.status = true;
  }

  exit(){
    this.status = true;
    this.isShow.emit(false);
  }

  showTaiLieu(file: File){
    this.status = false;
    this.isShow.emit(true);
    var formData = new FormData();
    formData.append('file',file)
    this.http.post('https://ej2services.syncfusion.com/production/web-services/api/documenteditor/Import', formData).subscribe((data:any) => {
      console.log(data)
    })
  }
}
