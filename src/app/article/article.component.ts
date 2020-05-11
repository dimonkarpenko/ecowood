import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/blog.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article$

  constructor(
    private blogServ: BlogService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.article$ = this.route.paramMap
    .pipe( switchMap(params => {
      return this.blogServ.getById(params['id'])
    }))
  }

}
