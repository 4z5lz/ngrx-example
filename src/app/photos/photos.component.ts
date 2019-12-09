import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

// import { CounterState } from '../store/state/photogallery.state';

@Component({
  selector: 'photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  public count$: Observable<number>;

  // constructor(private store: Store<CounterState>) {
  //   this.count$ = store.pipe(select('count'));
  // }

  ngOnInit() {}
}
