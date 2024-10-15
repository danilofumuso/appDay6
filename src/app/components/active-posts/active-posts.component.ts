import { Component, OnInit } from '@angular/core';
import { iPost } from '../../interfaces/ipost';
import { iJSONresponse } from '../../interfaces/jsonresponse';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss',
})
export class ActivePostsComponent implements OnInit {
  posts: iPost[] = [];

  constructor(private postSvc: PostService) {}

  ngOnInit() {
    this.posts = this.postSvc.posts.filter((post) => post.active); //equivale a post.active === true
  }
}
