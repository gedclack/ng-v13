import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  id = '';
  error = '';

  constructor(
    private postService: PostService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  send() {
    this.postService.getPost(this.id).subscribe({
      next: (data) => {
        if (!data?.title || !data?.body) return;

        this.postService.currentPost = data;

        this.router.navigateByUrl('/details');
      },
      error: (error) => {
        this.openSnackBar(error.error.message || error.statusText);
      },
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, undefined, { duration: 3000 });
  }
}
