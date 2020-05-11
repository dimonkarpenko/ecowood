import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  
  form: FormGroup
  product: Product

  submitted = false

  constructor(
    private route: ActivatedRoute,
    private productServ: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => {
        return this.productServ.getById(params['id'])
      })
    ).subscribe(product => {
      this.product = product
      this.form = new FormGroup({
        type: new FormControl(this.product.type, Validators.required),
        title: new FormControl(this.product.title, Validators.required),
        photo: new FormControl(this.product.photo, Validators.required),
        info: new FormControl(this.product.info, Validators.required),
        descShort: new FormControl(this.product.descShort, Validators.required),
        price: new FormControl(this.product.price, Validators.required)
    })
    })
  }

  submit() {
    if(this.form.invalid) {
      return
    }

    this.submitted = true

    this.productServ.update({
      ...this.product,
      type: this.form.value.type,
      title: this.form.value.title,
      photo: this.form.value.photo,
      info: this.form.value.info,
      descShort: this.form.value.descShort,
      price: this.form.value.price,
      date: new Date()
    }).subscribe(res => {
      this.submitted = false
      this.router.navigate(['/admin', 'dashboard'])
    })

  }
}
