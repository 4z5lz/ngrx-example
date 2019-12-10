import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { PhotogalleryService } from '../../services/photogallery.service';
import { EAlbumsActions, AlbumSelectedAction, AlbumsLoadedAction, AlbumsLoadingAction } from '../actions/albums';

@Injectable()
export class AlbumsEffects {
  @Effect()
  loadAlbums$ = this.actions$.pipe(
    ofType(EAlbumsActions.LOADING),
    mergeMap(() =>
      this.gallerySrv.getAlbums().pipe(
        map(albums => ({ type: EAlbumsActions.LOADED, payload: albums })),
        catchError(() => EMPTY)
      )
    )
  );

  constructor(private actions$: Actions, private gallerySrv: PhotogalleryService) {}
}
