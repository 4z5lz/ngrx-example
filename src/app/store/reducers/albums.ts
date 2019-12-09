import { EAlbumsActions, AlbumsActions } from '../actions/albums';
import { PhotogalleryState, initialPhotogalleryState } from '../state/photogallery.state';

export const albumsReducer = (
  state: PhotogalleryState = initialPhotogalleryState,
  action: AlbumsActions
): PhotogalleryState => {
  switch (action.type) {
    case EAlbumsActions.LOADING:
      return {
        ...state,
        albumLoading: action.payload
      };
    case EAlbumsActions.LOADED:
      return {
        ...state,
        albums: action.payload
      };
    case EAlbumsActions.SELECTED:
      return {
        ...state,
        selectedAlbumId: action.payload
      };
    default:
      return state;
  }
};
