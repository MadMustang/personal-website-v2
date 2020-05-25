import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  isMenuToggleClicked: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  menuToggleClick() {
    this.isMenuToggleClicked = !this.isMenuToggleClicked;
  }

}
