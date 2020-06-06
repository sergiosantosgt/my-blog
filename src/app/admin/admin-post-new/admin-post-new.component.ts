import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-post-new',
  templateUrl: '../admin-post-form/admin-post-form.component.html',
  styleUrls: ['./admin-post-new.component.scss']
})
export class AdminPostNewComponent implements OnInit {

  data: any = [];
  message: string = '';
  loading: boolean = false;
  submitted = false;
  model: any = {};
  title_text = 'New';
  button_text = 'Create';
  alert: any = [];

  constructor(
    private postService: PostService,
    private router: Router,
   ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.alert.message = '';
    this.loading = true;
    this.data.postCategorias = {
      id: 1
    }
    this.postService.newPost(this.data).subscribe(res => {
      this.data = [];
      this.alert.message = 'Post created successfully!';
      setTimeout(()=>{
        this.loading = false;
        this.router.navigateByUrl('/admin-list'); 
      }, 2500);
    }, err => {
      this.loading = false;
    });
  }

}
