import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/blog.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  article$

  constructor(
    public blogServ: BlogService
  ) { }

  ngOnInit(): void {
    this.article$ = this.blogServ.getAll()
  }

}
