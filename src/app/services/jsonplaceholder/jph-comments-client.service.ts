import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JphCommentsClientService {

  private readonly JSONPLACEHOLDER_ENDPOINT = 'https://jsonplaceholder.typicode.com/comments';

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getComments<T>(): Observable<HttpResponse<T>> {
    const { JSONPLACEHOLDER_ENDPOINT } = this;
    return this.httpClient
      .get<T>(
        JSONPLACEHOLDER_ENDPOINT,
        {
          observe: 'response',
        }
      );
  }
}
