import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from 'src/app/shared/contact.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders = []
  prodSubscription: Subscription
  removeSubsc: Subscription

  constructor(
    private contactServ: ContactService
  ) { }

  ngOnInit(): void {
    this.prodSubscription = this.contactServ.getAll().subscribe( orders => {
      this.orders = orders
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
    this.removeSubsc = this.contactServ.remove(id).subscribe( () => {
      this.orders = this.orders.filter(product => product.id !== id)
    })
  }

}
