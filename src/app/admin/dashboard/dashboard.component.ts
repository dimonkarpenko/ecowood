import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  products = []
  prodSubscription: Subscription
  removeSubsc: Subscription

  constructor(
    private productServ: ProductService
  ) { }

  ngOnInit(): void {
    this.prodSubscription = this.productServ.getAll().subscribe( products => {
      this.products = products
    })
  }

  ngOnDestroy() {
    if (this.prodSubscription) {
      this.prodSubscription.unsubscribe()
    }

    if (this.removeSubsc) {
      this.removeSubsc.unsubscribe()
    }
  }

  remove(id) {
    this.removeSubsc = this.productServ.remove(id).subscribe( () => {
      this.products = this.products.filter(product => product.id !== id)
    })
  }

}
