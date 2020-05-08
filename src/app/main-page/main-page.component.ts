import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../shared/services.service';
import { ProductService } from '../shared/product.service';

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
    public productServ: ProductService
  ) { }

  ngOnInit(): void {
    this.servInfo$ = this.servicesServ.getAllServices()
    this.products$ = this.productServ.getAll()
  }

}
