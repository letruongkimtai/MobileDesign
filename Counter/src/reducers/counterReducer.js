import {INCREASE, DECREASE} from '../actions/types';

export default function (state = {count:0}, action) {
  switch (action.type) {
    case INCREASE:
    return state.count + 1;

    case DECREASE:
      return state.count - 1;

    default:
      return state;
  }
}