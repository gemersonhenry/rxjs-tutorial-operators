import { IPhoto } from './photos.interface';

export class Photo {

  public id: number;
  public albumId: number;
  public title: string;
  public url: string;
  public thumbnailUrl: string;

  constructor(photo: IPhoto) {
    this.id = photo.id || -1;
    this.albumId = photo.albumId || -1;
    this.title = photo.title || '';
    this.url = photo.url || '';
    this.thumbnailUrl = photo.thumbnailUrl || '';
  }
}
