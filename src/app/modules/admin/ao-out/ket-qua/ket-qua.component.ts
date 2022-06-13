import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-ket-qua',
  templateUrl: './ket-qua.component.html',
  styleUrls: ['./ket-qua.component.css'],
  providers:[ToolbarService]
})
export class KetQuaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
