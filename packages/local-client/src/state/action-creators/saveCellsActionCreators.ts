import axios from 'axios';
import { ActionType } from '../action-types';
import { Cell } from '../cell';
import { Dispatch } from 'redux';
import { Action } from '../actions';
import { RootState } from '../reducers';

export const saveCells = () => {
  return async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    const {
      cells: { data, order },
    } = getState();

    const cells = order.map((id) => data[id]);
    try {
      await axios.post('/cells', { cells });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SAVE_CELLS_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
