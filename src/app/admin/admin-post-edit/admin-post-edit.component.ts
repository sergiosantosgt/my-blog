import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { GeneralDataService } from '../../services/general.service';

@Component({
  selector: 'app-admin-post-edit',
  templateUrl: '../admin-post-form/admin-post-form.component.html',
  styleUrls: ['./admin-post-edit.component.scss']
})
export class AdminPostEditComponent implements OnInit {

  data: any = [];
  message: string = '';
  loading: boolean = false;
  submitted = false;
  model: any = {};
  post_id: string = '';
  title_text = 'Edit';
  button_text = 'Edit';
  alert: any = [];

  constructor(
    private postService: PostService,
    public router: Router,
    private route: ActivatedRoute,
    private generalService: GeneralDataService
   ) { this.post_id = this.route.snapshot.paramMap.get('post_id'); }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    this.loading = true;
    this.postService.getPost(this.post_id).subscribe(res => 
    {   
      this.data = res;
      this.data.content = this.generalService.formatTextAreaLineBreak(this.data.content);
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
    });
  }

  modalChange() {
    this.generalService.modalStatus();
  }

  editPost() {
    this.alert.message = "";
    this.loading = true;
    this.postService.editPost(this.post_id, this.data).subscribe(res => {
      this.loading = false;
      this.alert.message = "Data edited successfully.";
      setTimeout(()=>{
        this.router.navigateByUrl('/admin-list'); 
      }, 3000);
    }, err => {
      this.loading = false;
    });
  }

  onSubmit() {
    document.getElementById('modal-edit').click();
  }

}
