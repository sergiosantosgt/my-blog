import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PostService } from '../services/post.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  
  article_id: string = '';
  article: any = [];
  loading: boolean = false;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private postService: PostService
  ) { 
    this.article_id = this.route.snapshot.paramMap.get('article_id');
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.loading = true;
    this.postService.getArticle(this.article_id).subscribe(res => 
    {   
      this.article = res;
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
    });

  }

}
