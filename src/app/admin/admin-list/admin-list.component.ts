import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  articles: any = [];
  loading: boolean = false;
  table_heading = { h1: 'Date', h2: 'Title', h3: 'Subtitle', h4: 'Actions' }; 

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
