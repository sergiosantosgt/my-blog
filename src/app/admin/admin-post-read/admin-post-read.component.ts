import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PostService } from '../../services/post.service';
import { GeneralDataService } from '../../services/general.service';

@Component({
  selector: 'app-admin-post-read',
  templateUrl: './admin-post-read.component.html',
  styleUrls: ['./admin-post-read.component.scss']
})
export class AdminPostReadComponent implements OnInit {

  post_id: string = '';
  article: any = [];
  loading: boolean = false;
  post: any = [];
  alert: any = [];

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
    private generalService: GeneralDataService
  ) { 
    this.post_id = this.route.snapshot.paramMap.get('post_id');
    this.post.delete_id = this.post_id;
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

  modalChange() {
    let modalStatus = this.generalService.modalStatus();
    if(modalStatus) this.post.delete_id = null;
  }

  deletePost(id) {
    this.alert.message = "";
    this.loading = true;
    this.postService.deletePost(id).subscribe(res => {
      this.loading = false;
      this.alert.message = "Post deleted successfully!";
      setTimeout(()=>{
        this.router.navigateByUrl('/admin-list'); 
      }, 2500);
    }, err => {
      this.loading = false;
    });
  }

}
