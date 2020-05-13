import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$

  type = ''

  toggle = true

  constructor(
    public productServ: ProductService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show()
    this.products$ = this.productServ.getAll()
  }

  setType(type) {
    this.type = type

      this.router.navigate(['/products']), {
        queryParams: {
          type: this.type
        }
    }

    this.productServ.setType(this.type)
  }

  toggleCards() {
    this.toggle = !this.toggle
  }

}
