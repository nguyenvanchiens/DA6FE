import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ToolbarService, DocumentEditorContainerComponent } from '@syncfusion/ej2-angular-documenteditor';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FilterModel } from 'src/app/core/models/filter.model';
import { TitleBar } from '../../title-bar';
import { TaiLieu } from '../tai-lieu.model';
import { ChiTietService } from './chi-tiet.service';

@Component({
  selector: 'app-chi-tiet',
  templateUrl: './chi-tiet.component.html',
  styleUrls: ['./chi-tiet.component.css'],
  providers: [ToolbarService]
})
export class ChiTietComponent implements OnInit {
  @Output() isShow = new EventEmitter<boolean>();
  @ViewChild('documenteditor_ref') public container! : DocumentEditorContainerComponent;
  listOfData: readonly TaiLieu[] = [];
  titleBar: TitleBar;
  status : boolean;
  serviceLink: string = "";
  fileStorage: any;
  filter = new FilterModel();
  isLoading = false;
  constructor(
    private chitietApi : ChiTietService,
    private http : HttpClient,
    private notifi: NzNotificationService,
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

  async showTaiLieu(file: any){
    this.fileStorage = file;
    this.status = false;
    this.isShow.emit(true);
    const formData = new FormData();
    formData.append('file', file, file.name);
    const content = await this.http.post(this.serviceLink+"Import", formData).toPromise();
    this.container.documentEditor.open(JSON.stringify(content));
  }
  
  onCreate() {
    let titleBarElement: HTMLElement = document.getElementById('default_title_bar');
    this.titleBar = new TitleBar(titleBarElement, this.container.documentEditor, true);
    this.container.documentEditor.documentName = 'T??I LI???U K??? THU???T';
    this.titleBar.updateDocumentTitle();
  }

  onDocumentChange() {
    if (!isNullOrUndefined(this.titleBar)) {
        this.titleBar.updateDocumentTitle();
    }
    this.container.documentEditor.focusIn();
  }
  async save(){
    this.isLoading = true;
    let fileName = await this.generateFineName(this.fileStorage.name)
    const fileBlob = await this.container.documentEditor.saveAsBlob("Docx");
    const new_file = new File([fileBlob], fileName, {
      type: fileBlob.type,
    });
    const formData = new FormData();
    formData.append('file',new_file,new_file.name)
    this.http.post("https://localhost:7284/api/File/importfile", formData).subscribe((res:any)=>{
      if (res != null){
        this.isLoading = false;
        let message = "???? th??m m???u t??i li???u "+res.tenFile+" v??o kho d??? li???u!"
        this.notifi.success("TH??NG B??O",message)
      }
    })
  }
  replaceString(tablename: string): string {
    let result = tablename.replace(/\s/g, '');
    result = this.removeAccents(result)
    return result
  }

  removeAccents(str) {
    var AccentsMap = [
      "a??????????????????????????????????????????????",
      "A??????????????????????????????????????????????",
      "d??", "D??",
      "e??????????????????????????????",
      "E??????????????????????????????",
      "i????????????",
      "I????????????",
      "o??????????????????????????????????????????????",
      "O??????????????????????????????????????????????",
      "u?????????????????????????????",
      "U?????????????????????????????",
      "y??????????????",
      "Y??????????????"
    ];
    for (var i = 0; i < AccentsMap.length; i++) {
      var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
      var char = AccentsMap[i][0];
      str = str.replace(re, char);
    }
    return str;
  }

  async generateFineName(filename: string){
    let name = filename.replace(/[.doc 0-9]/g,'')
    this.filter.keyword = name;
    let files = await this.chitietApi.list(this.filter).toPromise();
    this.listOfData = files.items
    let max_version = this.listOfData.reduce(function(accumulator, element){
      let prev = accumulator.tenFile.replace(/[^0-9]/g, '');
      let next = element.tenFile.replace(/[^0-9]/g, '');
      return (prev > next) ? accumulator : element
    });
    let v = max_version.tenFile.replace(/[^0-9]/g, '')
    let vs = (+v)+1
    return name+vs+".doc";
  }
}
