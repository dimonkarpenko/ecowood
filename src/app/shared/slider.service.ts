import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { fbResImg } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  

  constructor(
    private http: HttpClient
  ) { }

  createSlider(sliderImg) {
    return this.http.post(`${environment.fbDbUrl}/images.json`, sliderImg)
    .pipe(map( (res: fbResImg) => {
      return ({
        ...sliderImg,
        id: res.name,
        date: new Date(sliderImg.date)
      })
    }))
  }

  getAllSlides() {
    return this.http.get(`${environment.fbDbUrl}/images.json`)
    .pipe( map( (res => {
      return Object.keys(res)
      .map( key => ({
        ...res[key],
        id: key,
        date: new Date(res[key].date)
      }))
    })))
  }
}
