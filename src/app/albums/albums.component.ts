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

  constructor(private store: Store<PhotogalleryState>) {}

  ngOnInit() {
    this.loading();
  }

  public loading(): void {
    this.store.dispatch(new AlbumsLoadingAction(true));
    this.store.dispatch(new AlbumsLoadingAction(true));
  }
}
