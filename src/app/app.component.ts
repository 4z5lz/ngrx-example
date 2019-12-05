import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CounterState } from './store/state/counter';
import { CounterActions } from './store/actions/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public count$: Observable<number>;

  constructor(private store: Store<CounterState>) {
    this.count$ = store.pipe(select('count'));
  }

  public increment(): void {
    this.store.dispatch({ type: CounterActions.INCREMENT });
  }

  public decrement(): void {
    this.store.dispatch({ type: CounterActions.DECREMENT });
  }

  public reset(): void {
    this.store.dispatch({ type: CounterActions.RESET });
  }
}
