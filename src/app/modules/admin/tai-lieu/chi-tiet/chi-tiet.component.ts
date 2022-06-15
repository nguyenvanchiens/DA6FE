import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ToolbarService, DocumentEditorContainerComponent } from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-chi-tiet',
  templateUrl: './chi-tiet.component.html',
  styleUrls: ['./chi-tiet.component.css'],
  providers: [ToolbarService]
})
export class ChiTietComponent implements OnInit {
  @Output() isShow = new EventEmitter<boolean>();
  @ViewChild('documenteditor_ref') public container! : DocumentEditorContainerComponent;
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
    var form = new FormData()
    form.append("file",file)
  }
  uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    console.log(this.container.documentEditor)
    this.http.post('https://ej2services.syncfusion.com/production/web-services/api/documenteditor/Import', formData).subscribe((data:any) => {
      
    })
  }
}
