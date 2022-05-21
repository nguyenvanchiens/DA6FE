import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loai-ao',
  templateUrl: './loai-ao.component.html',
  styleUrls: ['./loai-ao.component.css']
})
export class LoaiAoComponent implements OnInit {
  radioValue = "A";
  constructor() { }

  ngOnInit(): void {
  }

}
