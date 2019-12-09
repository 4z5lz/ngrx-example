import { AlbumModel } from '../../models/album.model';
import { PhotoModel } from '../../models/photo.model';

export interface PhotogalleryState {
  albumLoading: boolean;
  albums: Array<AlbumModel>;
  selectedAlbumId: number;

  photosLoading: boolean;
  photos: Array<PhotoModel>;
}

export const initialPhotogalleryState: PhotogalleryState = {
  albumLoading: false,
  albums: [],
  selectedAlbumId: 0,

  photosLoading: false,
  photos: []
};
