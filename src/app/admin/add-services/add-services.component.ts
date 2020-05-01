import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/shared/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.scss']
})
export class AddServicesComponent implements OnInit {

  form: FormGroup
  submitted = false

  constructor(
    private servServ: ServicesService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.form = new FormGroup({
      desc: new FormControl(null, Validators.required),
      img: new FormControl(null, Validators.required),
      info: new FormControl(null, Validators.required)
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.submitted = true

    const servInfo = {
      desc: this.form.value.desc,
      img: this.form.value.img,
      info: this.form.value.info,
      date: new Date()
    }

    this.servServ.createService(servInfo).subscribe( res => {
      this.form.reset()
      this.submitted = false
      this.router.navigate(['/admin', 'add-services'])
    })
  }

}
