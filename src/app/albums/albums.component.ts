import { Component, OnInit } from '@angular/core';
import { Store, select, createSelector } from '@ngrx/store';

import { PhotogalleryState } from '../store/state/photogallery.state';
import { AlbumsLoadingAction, AlbumsLoadedAction } from '../store/actions/albums';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  public isLoading$ = this.store.pipe(select((state: PhotogalleryState) => state.albumLoading));
  public albumsLoaded$ = this.store.pipe(select((state: PhotogalleryState) => state.albums));

  constructor(private store: Store<PhotogalleryState>) {}

  ngOnInit() {
    this.load();
  }

  public load(): void {
    this.store.dispatch(new AlbumsLoadingAction(true));
    this.store.dispatch(new AlbumsLoadedAction());
  }
}
