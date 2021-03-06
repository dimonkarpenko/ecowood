import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../shared/services.service';
import { ProductService } from '../shared/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BlogService } from '../shared/blog.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  servInfo$
  products$
  article$

  constructor(
    public servicesServ: ServicesService,
    public productServ: ProductService,
    public blogServ: BlogService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show()

    this.article$ = this.blogServ.getAllArticles()
    this.servInfo$ = this.servicesServ.getAllServices()
    this.products$ = this.productServ.getAll()
  }

}
