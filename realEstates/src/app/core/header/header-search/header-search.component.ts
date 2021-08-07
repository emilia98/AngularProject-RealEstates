import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent implements OnInit {
  inputFocused: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onInputFocus(): void {
    this.inputFocused = true;
  }

  onInputOutFocus(): void {
    this.inputFocused = false;
  }

}