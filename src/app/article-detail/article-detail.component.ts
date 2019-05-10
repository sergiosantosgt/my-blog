import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PostService } from '../services/post.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  
  post_id: string = '';
  article: any = [];
  loading: boolean = false;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private postService: PostService
  ) { 
    this.post_id = this.route.snapshot.paramMap.get('post_id');
  }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    this.loading = true;
    this.postService.getPost(this.post_id).subscribe(res => 
    {   
      this.article = res;
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
    });
  }

}
