import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnsubscribingComponent } from './unsubscribing.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'unsubscribing',
    pathMatch: 'full'
  },
  {
    path: 'unsubscribing',
    component: UnsubscribingComponent,
    children: [
      {
        path: '',
        redirectTo: 'comment-list',
        pathMatch: 'full'
      },
      {
        path: 'comment-list',
        component: CommentListComponent,
        pathMatch: 'full',
      },
      {
        path: 'photo-list',
        component: PhotoListComponent,
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    RouterModule,
  ],
})
export class UnsubscribingRoutingModule {}
