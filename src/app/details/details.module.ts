import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DetailsRoutingModule } from './details-routing.module';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
  declarations: [PostDetailsComponent],
  imports: [SharedModule, DetailsRoutingModule],
})
export class DetailsModule {}
