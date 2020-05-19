import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/blog.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  article$

  constructor(
    public blogServ: BlogService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show()
    this.article$ = this.blogServ.getAllArticles()
  }

}
