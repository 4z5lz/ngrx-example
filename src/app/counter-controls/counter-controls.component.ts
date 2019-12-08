import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { CounterActions } from '../store/actions/counter';
import { CounterState } from '../store/state/counter';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css']
})
export class CounterControlsComponent implements OnInit {
  constructor(private store: Store<CounterState>) {}

  ngOnInit() {}

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
