import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { albumsReducer } from './store/reducers/albums';
import { photosReducer } from './store/reducers/photos';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, AlbumsComponent, PhotosComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    // EffectsModule.forRoot([UserEffects, ConfigEffects]),
    StoreModule.forRoot({
      albums: albumsReducer,
      photos: photosReducer
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
