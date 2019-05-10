import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ] 
})
export class HeaderComponent implements OnInit {
  title = 'My blog';
  checkbox = false;
  
  constructor() {}
  ngOnInit() {}

  closeMenu() {
    // document.getElementById('nav-check').click();
    // document.getElementById("nav-links").checked = false; = "0";
    this.checkbox = false;
  }
}
