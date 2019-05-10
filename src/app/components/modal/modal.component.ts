import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() post: any;

  @Output() goDelete = new EventEmitter<boolean>();

  post_id: string = '';
  article: any = [];
  loading: boolean = false;
  alert: any = [];

  constructor(
    public router: Router,
  ) { 
  }

  ngOnInit() {
  }

  onDelete(): void {
    this.goDelete.emit(this.post.delete_id);
  }

}
