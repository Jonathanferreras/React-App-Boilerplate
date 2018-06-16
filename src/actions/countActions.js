import { INCREMENT, DECREMENT } from '../constants/types';

export const incrementCount = () => {
  return {
    type: INCREMENT
  };
};

export const decrementCount = () => {
  return {
    type: DECREMENT
  };
};

