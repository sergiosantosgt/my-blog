import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-admin-post-new',
  templateUrl: './admin-post-new.component.html',
  styleUrls: ['./admin-post-new.component.scss']
})
export class AdminPostNewComponent implements OnInit {

  data: any = [];
  message: string = '';
  loading: boolean = false;
  // submitted: boolean = false;
  registerForm: FormGroup;

  constructor(private postService: PostService,
   ) { }

  ngOnInit() {
  }

  newPost(form: NgForm) {
    console.log(form);
    this.loading = true;
    if (form.valid) {
      this.postService.newPost(this.data).subscribe(res => {
        this.loading = false;
        console.log(res);
      }, err => {
        this.loading = false;
      });
    } else this.loading = false;
  }

}
