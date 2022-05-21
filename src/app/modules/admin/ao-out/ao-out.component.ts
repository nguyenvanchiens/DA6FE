import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ao-out',
  templateUrl: './ao-out.component.html',
  styleUrls: ['./ao-out.component.css']
})
export class AoOutComponent implements OnInit {
  current = 0;
  index = 1;

  pre(): void {
    this.current -= 1;
    if (this.index < 3) {
      this.index += 1
    }
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    if (this.index > 0) {
      this.index += 1
    }
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 1;
        break;
      }
      case 1: {
        this.index = 2;
        break;
      }
      case 2: {
        this.index = 3;
        break;
      }
      default: {
        this.index = 0;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
