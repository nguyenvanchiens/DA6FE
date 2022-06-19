import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DocumentEditorContainerComponent, ToolbarService } from '@syncfusion/ej2-angular-documenteditor';
import { TitleBar } from '../../title-bar';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { NzNotificationService } from 'ng-zorro-antd/notification';

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
    private notifi: NzNotificationService,
    private http : HttpClient
  ) {
    this.serviceLink = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';
   }

  ngOnInit(): void {
  }

  async showTaiLieu(file: any){
    const formData = new FormData();
    formData.append('file', file, file.name);
    const content = await this.http.post(this.serviceLink+"Import", formData).toPromise();
    this.container.documentEditor.open(JSON.stringify(content));
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
  
  async save(fileName: string){
    const fileBlob = await this.container.documentEditor.saveAsBlob("Docx");
    const new_file = new File([fileBlob], fileName, {
      type: fileBlob.type,
    });
    const formData = new FormData();
    formData.append('file',new_file,new_file.name)
    this.http.post("https://localhost:7284/api/File/importfile", formData).subscribe((res:any)=>{
      if (res != null){
        let message = "Đã thêm mẫu tài liệu "+res.tenFile+" vào kho dữ liệu!"
        this.notifi.success("THÔNG BÁO",message)
      }
    })
  }
}
