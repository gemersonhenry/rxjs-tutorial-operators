import { Injectable } from '@angular/core';
import { JphPhotosClientService } from './jph-photos-client.service';
import { Observable } from 'rxjs';
import { IResponse } from './jph-comments-implement.service';
import { Photo } from 'src/app/models/jsonplaceholder/photos.model';
import { IPhoto } from 'src/app/models/jsonplaceholder/photos.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class JphPhotosImplementService {

  constructor(
    private jphPhotosClient: JphPhotosClientService,
  ) { }

  public getComments(): Observable<IResponse<Photo[]>> {
    return this.jphPhotosClient.getPhotos<IPhoto[]>()
      .pipe(
        map((response) => {
          const body = response.body.map(photo => new Photo(photo));
          return {
            body,
            status: response.status
          };
        })
      );
  }
}
