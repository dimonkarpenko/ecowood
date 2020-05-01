import { Component, OnInit } from '@angular/core';
import { SliderService } from '../shared/slider.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  providers: [NgbCarouselConfig]
})
export class ImageSliderComponent implements OnInit {

  sliderImg$

  constructor(
    public sliderServ: SliderService,
    config: NgbCarouselConfig
  ) {
    config.interval = 0;
   }

  ngOnInit(): void {
    this.sliderImg$ = this.sliderServ.getAllSlides()
  }

}
