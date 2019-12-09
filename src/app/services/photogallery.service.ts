import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumModel } from '../models/album.model';
import { Subscribable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotogalleryService {
  constructor(private http: HttpClient) {}

  public getAlbums(): Subscribable<Array<AlbumModel>> {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  public getPhotos(albumId: number): Subscribable<Array<AlbumModel>> {
    return this.http.get('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId);
  }
}
