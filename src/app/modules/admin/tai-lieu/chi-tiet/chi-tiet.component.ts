import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ToolbarService, DocumentEditorContainerComponent } from '@syncfusion/ej2-angular-documenteditor';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { TitleBar } from '../../title-bar';

@Component({
  selector: 'app-chi-tiet',
  templateUrl: './chi-tiet.component.html',
  styleUrls: ['./chi-tiet.component.css'],
  providers: [ToolbarService]
})
export class ChiTietComponent implements OnInit {
  @Output() isShow = new EventEmitter<boolean>();
  @ViewChild('documenteditor_ref') public container! : DocumentEditorContainerComponent;
  titleBar: TitleBar;
  status : boolean;
  serviceLink: string = "";
  constructor(
    private http : HttpClient
  ) {
    this.serviceLink = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';
   }

  ngOnInit(): void {
    this.status = true;
  }

  exit(){
    this.status = true;
    this.isShow.emit(false);
  }

  showTaiLieu(file: any){
    this.status = false;
    this.isShow.emit(true);
    const formData = new FormData();
    formData.append('file', file, file.name);
    this.http.post(this.serviceLink+"Import", formData).subscribe((data:any) => {
      this.container.documentEditor.open(JSON.stringify(data));
    })
  }
}
