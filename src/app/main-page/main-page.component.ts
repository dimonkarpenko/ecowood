import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../shared/services.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  servInfo$

  constructor(
    public servicesServ: ServicesService
  ) { }

  ngOnInit(): void {
    this.servInfo$ = this.servicesServ.getAllServices()
  }

}
