import { EPhotosActions, PhotosActions } from '../actions/photos';
import { PhotogalleryState, initialPhotogalleryState } from '../state/photogallery.state';

export const photosReducer = (
  state: PhotogalleryState = initialPhotogalleryState,
  action: PhotosActions
): PhotogalleryState => {
  switch (action.type) {
    case EPhotosActions.LOADING:
      return {
        ...state,
        photosLoading: action.payload
      };
    case EPhotosActions.LOADED:
      return {
        ...state,
        photos: action.payload
      };
    default:
      return state;
  }
};
