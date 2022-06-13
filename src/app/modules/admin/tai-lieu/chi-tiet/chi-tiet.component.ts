import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-chi-tiet',
  templateUrl: './chi-tiet.component.html',
  styleUrls: ['./chi-tiet.component.css'],
  providers: [ToolbarService]
})
export class ChiTietComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
