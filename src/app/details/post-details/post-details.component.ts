import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Post } from '../../post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  post: Post = <Post>{};

  constructor(private postService: PostService, private location: Location) {}

  ngOnInit(): void {
    this.post = this.postService.currentPost;
  }

  goBack() {
    this.location.back();
  }
}
