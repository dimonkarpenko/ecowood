import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from 'src/app/shared/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  form: FormGroup
  submitted = false

  constructor(
    private blogServ: BlogService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      photo: new FormControl(null, Validators.required),
      info: new FormControl(null, Validators.required),
      descShort: new FormControl(null, Validators.required)
    })
  }

  submit() {
    if(this.form.invalid) {
      return 
    }

    this.submitted = true

    const article = {
      title: this.form.value.title,
      photo: this.form.value.photo,
      info: this.form.value.info,
      descShort: this.form.value.descShort,
      date: new Date()
    }

    this.blogServ.create(article).subscribe(res => {
      this.form.reset()
      this.submitted = false
      this.router.navigate(['/admin', 'add-article'])
    })
  }

}
