import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-ket-qua',
  template: `<ejs-documenteditorcontainer serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" height="600px" style="display:block" [enableToolbar]=true> </ejs-documenteditorcontainer>`,
  styleUrls: ['./ket-qua.component.css'],
  providers:[ToolbarService]
})
export class KetQuaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
