import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { fbServ } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http: HttpClient
  ) { }

  createService(servInfo) {
    return this.http.post(`${environment.fbDbUrl}/services.json`,servInfo)
    .pipe(map( (res: fbServ) => {
      return ({
        ...servInfo,
        id: res.name,
        date: new Date(servInfo.date)
      })
    }))
  }

  getAllServices() {
    return this.http.get(`${environment.fbDbUrl}/services.json`)
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
