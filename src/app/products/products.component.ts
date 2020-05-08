import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$

  constructor(
    public productServ: ProductService
  ) { }

  ngOnInit(): void {
    this.products$ = this.productServ.getAll()
  }

}
