import { Action } from '@ngrx/store';

import { AlbumModel } from '../../models/album.model';

export enum EAlbumsActions {
  LOADING = '[Albums] Loadinig albums',
  LOADED = '[Albums] Albums loaded',
  SELECTED = '[Albums] Select album'
}

export class AlbumsLoadingAction implements Action {
  public readonly type = EAlbumsActions.LOADING;
  constructor(public payload: boolean) {}
}

export class AlbumsLoadedAction implements Action {
  public readonly type = EAlbumsActions.LOADED;
  constructor(public payload: Array<AlbumModel>) {}
}

export class AlbumSelectedAction implements Action {
  public readonly type = EAlbumsActions.SELECTED;
  constructor(public payload: number) {}
}

export type AlbumsActions = AlbumsLoadingAction | AlbumsLoadedAction | AlbumSelectedAction;
