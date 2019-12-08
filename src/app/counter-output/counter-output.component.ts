import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CounterState } from '../store/state/counter';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  public count$: Observable<number>;

  constructor(private store: Store<CounterState>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {}
}
