import { Component, OnInit } from '@angular/core';
import { iPost } from '../../interfaces/ipost';
import { iJSONresponse } from '../../interfaces/jsonresponse';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss',
})
export class InactivePostsComponent implements OnInit {
  posts: iPost[] = [];

  constructor(private postSvc: PostService) {}

  ngOnInit() {
    this.posts = this.postSvc.posts.filter((post) => !post.active);
  }
}
