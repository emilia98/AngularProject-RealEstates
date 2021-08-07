import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isOpened: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavBar(): void {
    this.isOpened = !this.isOpened;
  }
}
