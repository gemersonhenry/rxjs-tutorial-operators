import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bz-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  public postId: string;

  constructor() { }

  ngOnInit() {
  }

  public updatePostId() {
    console.log(this.postId);
  }

}
