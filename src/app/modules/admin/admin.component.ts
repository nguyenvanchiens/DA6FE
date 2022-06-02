import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  isCollapsed = true;
  name = JSON.parse(localStorage.getItem('name'))
  constructor(
    private route: Router) { }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.clear()
    this.route.navigate(['/login'], {});
  }
}
