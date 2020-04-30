import { Component, OnInit } from '@angular/core';
import { SliderService } from '../shared/slider.service';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  sliderImg$

  constructor(
    public sliderServ: SliderService
  ) { }

  ngOnInit(): void {
    this.sliderImg$ = this.sliderServ.getAllSlides()
  }

}
