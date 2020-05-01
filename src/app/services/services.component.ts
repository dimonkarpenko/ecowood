import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../shared/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  servInfo$

  constructor(
    public serviceServ: ServicesService
  ) { }

  ngOnInit(): void {
    this.servInfo$ = this.serviceServ.getAllServices()
  }

}
