import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  currentPost: Post = <Post>{};

  private postsUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getPost(id: string) {
    return this.http.get<Post>(`${this.postsUrl}/${id}`);
  }
}
