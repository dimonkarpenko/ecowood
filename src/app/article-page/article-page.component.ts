import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/blog.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  article$

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.article$ = this.route.params
    .pipe( switchMap(params => {
      return this.blogService.getById(params['id'])
    }))
  }

}
