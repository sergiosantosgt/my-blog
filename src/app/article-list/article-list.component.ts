import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: any = [];
  loading: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.loading = true;
    this.postService.getArticles().subscribe(res => 
    {   
      this.articles = res;
      this.loading = false;
    }, err => {
      this.loading = false;
      console.log(err);
    });
  }

}
