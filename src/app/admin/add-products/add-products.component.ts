import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/shared/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  form: FormGroup
  submitted = false

  constructor(
    private productServ: ProductService,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      type: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      photo: new FormControl(null, Validators.required),
      info: new FormControl(null, Validators.required),
      descShort: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required)
    })
  }

  submit() {
    if(this.form.invalid) {
      return 
    }

    this.submitted = true

    const product = {
      type: this.form.value.type,
      title: this.form.value.title,
      photo: this.form.value.photo,
      info: this.form.value.info,
      price: this.form.value.price,
      descShort: this.form.value.descShort,
      date: new Date()
    }

    this.productServ.create(product).subscribe(res => {
      this.form.reset()
      this.submitted = false
      this.router.navigate(['/admin', 'add-products'])
    })
  }

}
