import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DocumentEditorContainerComponent, ToolbarService } from '@syncfusion/ej2-angular-documenteditor';
import { TitleBar } from '../../title-bar';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-ket-qua',
  templateUrl: './ket-qua.component.html',
  styleUrls: ['./ket-qua.component.css'],
  providers:[ToolbarService]
})
export class KetQuaComponent implements OnInit {
  @ViewChild('documenteditor_ref') public container! : DocumentEditorContainerComponent;
  titleBar: TitleBar;
  serviceLink: string = "";
  constructor(
    private http : HttpClient
  ) {
    this.serviceLink = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';
   }

  ngOnInit(): void {
  }

  showTaiLieu(file: any){
    const formData = new FormData();
    formData.append('file', file, file.name);
    this.http.post(this.serviceLink+"Import", formData).subscribe((data:any) => {
      this.container.documentEditor.open(JSON.stringify(data));
    })
  }
  onCreate() {
    let titleBarElement: HTMLElement = document.getElementById('default_title_bar');
    this.titleBar = new TitleBar(titleBarElement, this.container.documentEditor, true);
    this.container.documentEditor.documentName = 'TÀI LIỆU KỸ THUẬT';
    this.titleBar.updateDocumentTitle();
  }

  onDocumentChange() {
    if (!isNullOrUndefined(this.titleBar)) {
        this.titleBar.updateDocumentTitle();
    }
    this.container.documentEditor.focusIn();
  }
}
