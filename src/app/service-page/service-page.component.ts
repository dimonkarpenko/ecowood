import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../shared/services.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss']
})
export class ServicePageComponent implements OnInit {

  servInfo$

  constructor(
    private serviceServ: ServicesService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show()
    this.servInfo$ = this.route.params
    .pipe( switchMap (params => {
      return this.serviceServ.getById(params['id'])
    }))
  }

}
