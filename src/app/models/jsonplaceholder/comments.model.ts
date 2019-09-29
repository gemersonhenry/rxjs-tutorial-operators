import { IComment } from './comments.interface';

export class Comment {

  public id: number;
  public postId: number;
  public name: string;
  public email: string;
  public body: string;

  constructor(comment: IComment) {
    this.id = comment.id || -1;
    this.postId = comment.postId || -1;
    this.name = comment.name || '';
    this.email = comment.email || '';
    this.body = comment.body || '';
  }

}
