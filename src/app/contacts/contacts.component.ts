import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../shared/contact.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  form : FormGroup
  submitted = false

  constructor(
    private contactServ: ContactService,
    private spinner: NgxSpinnerService
  ) {

   }

  ngOnInit(): void {

    this.spinner.show()

    setTimeout(() => {
      this.spinner.hide()
    },3000)


    this.form = new FormGroup ({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required)
    })
  }

  submit() {
    if(this.form.invalid) {
      return
    }

    this.submitted = true

    const order = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      email: this.form.value.email,
      date: new Date()
    }    

    this.contactServ.create(order).subscribe(res => {
      this.form.reset()
      this.submitted = false
    })
    
  }

}
