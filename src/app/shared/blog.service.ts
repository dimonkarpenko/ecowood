import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { fbBlog, Article } from './interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  create(article) {
    return this.http.post(`${environment.fbDbUrl}/articles.json`, article)
    .pipe(map( (res : fbBlog) => {
      return ({
        ...article,
        id: res.name,
        date: new Date(article.date)
      });
    }))
  }

  getAll() {
    return this.http.get(`${environment.fbDbUrl}/articles.json`)
      .pipe(
        map( (res => {
          return Object.keys(res)
          .map( key => ({
            ...res[key],
            id: key,
            date: new Date(res[key].date)
          }))
        }))
      )
  }

  getById(id) {
    return this.http.get(`${environment.fbDbUrl}/articles/${id}.json`)
      .pipe( map ( (res : Article) => {
        return {
          ...res,
          id,
          date: new Date(res.date)
        }
      }))
  }
}
