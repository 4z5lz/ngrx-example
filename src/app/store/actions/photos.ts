import { Action } from '@ngrx/store';

import { PhotoModel } from '../../models/photo.model';

export enum EPhotosActions {
  LOADING = '[Photos] Loading photos',
  LOADED = '[Photos] Photos loaded'
}

export class PhotosLoadingAction implements Action {
  public readonly type = EPhotosActions.LOADING;
  constructor(public payload: boolean) {}
}

export class PhotosLoadedAction implements Action {
  public readonly type = EPhotosActions.LOADED;
  constructor(public payload: Array<PhotoModel>) {}
}

export type PhotosActions = PhotosLoadingAction | PhotosLoadedAction;
