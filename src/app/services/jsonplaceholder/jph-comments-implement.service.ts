import { Injectable } from '@angular/core';
import { JphCommentsClientService } from './jph-comments-client.service';
import { IComment } from 'src/app/models/jsonplaceholder/comments.interface';
import { map } from 'rxjs/operators';
import { Comment } from 'src/app/models/jsonplaceholder/comments.model';
import { Observable } from 'rxjs';

export interface IResponse<T> {
  body: T;
  status: number;
}

@Injectable()
export class JphCommentsImplementService {

  constructor(
    private jphCommentsClient: JphCommentsClientService,
  ) { }

  public getComments(): Observable<IResponse<Comment[]>> {
    return this.jphCommentsClient.getComments<IComment[]>()
      .pipe(
        map((response) => {
          const body = response.body.map(comment => new Comment(comment));
          return {
            body,
            status: response.status
          };
        })
      );
  }
}
