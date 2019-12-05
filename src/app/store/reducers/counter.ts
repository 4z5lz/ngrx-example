import { Action } from '@ngrx/store';
import { CounterActions } from '../actions/counter';

const initialState: number = 0;

export function counterReducer(state: number = initialState, action: Action) {
  switch (action.type) {
    case CounterActions.INCREMENT:
      return state + 1;
    case CounterActions.DECREMENT:
      return state - 1;
    case CounterActions.RESET:
      return initialState;
    default:
      return state;
  }
}
