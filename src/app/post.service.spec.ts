import { HttpClient } from '@angular/common/http';
import { PostService } from './post.service';

describe('PostService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: PostService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new PostService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
