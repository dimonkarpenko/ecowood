import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../shared/services.service';
import { ProductService } from '../shared/product.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  servInfo$
  products$

  constructor(
    public servicesServ: ServicesService,
    public productServ: ProductService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show()

    setTimeout(() => {
      this.spinner.hide()
    },7000)

    this.servInfo$ = this.servicesServ.getAllServices()
    this.products$ = this.productServ.getAll()
  }

}
