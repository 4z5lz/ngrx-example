import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { AlbumModel } from '../models/album.model';
// import { Subscribable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotogalleryService {
  constructor(private http: HttpClient) {}

  public getAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  public getPhotos(albumId: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId);
  }
}
