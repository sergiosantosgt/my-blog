import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { GeneralDataService } from '../../services/general.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  articles: any = [];
  loading: boolean = false;
  table_heading = { h1: 'Date', h2: 'Title', h3: 'Subtitle', h4: 'Actions' };
  post: any = [];
  alert: any = [];
  total = 0;
  page = 1;
  limit = 5;
  data: any =[];

  constructor(
    private postService: PostService,
    private generalService: GeneralDataService,
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getTotalPosts() {
    this.loading = true;
    this.postService.getTotalPosts().subscribe(res => 
    { 
      this.total = res.length;
      this.loading = false;
    }, err => {
      this.loading = false;
      console.log(err);
    });
  }

  getPosts(): void {
    if(!this.data.search) this.loading = true;
    this.postService.filterPosts(this.page, this.limit, this.data.search).subscribe(res => 
    { 
      if(!this.data.search) {
        this.getTotalPosts();
        this.loading = false;
      } else {
        this.page = 1;
        this.total = res.length;
      }
      this.articles = res;
    }, err => {
      this.loading = false;
      console.log(err);
    });
  }

  deleteModal(id) {
    this.post.delete_id = id;
  }

  modalChange() {
    let modalStatus = this.generalService.modalStatus();
    if(modalStatus) this.post.delete_id = null;
  }

  deletePost(id) {
    this.alert.message = "";
    this.loading = true;
    this.postService.deletePost(id).subscribe(res => {
      this.getPosts();
      this.loading = false;
      this.alert.message = "Post deleted successfully!";
      setTimeout(()=>{
        this.alert.message = ""; 
      }, 2500);
    }, err => {
      this.loading = false;
    });
  }

  goToPage(n: number): void {
    this.page = n;
    this.getPosts();
  }

  onNext(): void {
    this.page++;
    this.getPosts();
  }

  onPrev(): void {
    this.page--;
    this.getPosts();
  }

  selectPagLimit(event) {
    this.limit = event.target.value;
    this.page = 1;
    this.getPosts();
  }

}
