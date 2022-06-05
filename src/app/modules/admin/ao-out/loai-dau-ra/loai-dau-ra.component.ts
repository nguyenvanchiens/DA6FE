import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loai-dau-ra',
  templateUrl: './loai-dau-ra.component.html',
  styleUrls: ['./loai-dau-ra.component.css']
})
export class LoaiDauRaComponent implements OnInit {
  radioValue = 'A'
  constructor() { }

  ngOnInit(): void {
  }

}
