import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../shared/services.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  servInfo$

  constructor(
    public serviceServ: ServicesService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show()
    this.servInfo$ = this.serviceServ.getAllServices()
  }

}
