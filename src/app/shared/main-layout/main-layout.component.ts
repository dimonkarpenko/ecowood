import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  toggle = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleCards() {
    this.toggle = !this.toggle
  }

}
