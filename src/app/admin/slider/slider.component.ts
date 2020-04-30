import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SliderService } from 'src/app/shared/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  form: FormGroup
  submitted = false

  constructor(
    private sliderServ: SliderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      photo: new FormControl(null, Validators.required)
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.submitted = true

    const sliderImg = {
      title: this.form.value.title,
      description: this.form.value.description,
      photo: this.form.value.photo,
      date: new Date()
    }

    this.sliderServ.createSlider(sliderImg).subscribe(res => {
      this.form.reset()
      this.submitted = false
      this.router.navigate(['/admin', 'add-slider'])
    })
  }

}
