import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsubscribingComponent } from './unsubscribing.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { UnsubscribingRoutingModule } from './unsubscribing-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UnsubscribingComponent,
    CommentListComponent,
    PhotoListComponent,
  ],
  imports: [
    CommonModule,
    UnsubscribingRoutingModule,
    FormsModule,
  ]
})
export class UnsubscribingModule { }
