import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Post } from 'src/app/post';
import { PostService } from 'src/app/post.service';

import { PostDetailsComponent } from './post-details.component';

class MockPostService {
  currentPost: Post = {
    id: 1,
    userId: 1,
    title: 'This is test',
    body: 'Test Body',
  };
}

describe('PostDetailsComponent', () => {
  let component: PostDetailsComponent;
  let fixture: ComponentFixture<PostDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostDetailsComponent],
      providers: [{ provide: PostService, useClass: MockPostService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
