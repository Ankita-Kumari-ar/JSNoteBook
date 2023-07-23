import { produce } from 'immer';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface BundledState {
  [key: string]:
    | {
        loading: boolean;
        code: string;
        err: string;
      }
    | undefined;
}

const initialState: BundledState = {}; //initially we have no bundles for any cell

const reducer = produce(
  (state: BundledState = initialState, action: Action): BundledState => {
    switch (action.type) {
      case ActionType.BUNDLE_START:
        state[action.payload.cellId] = {
          loading: true,
          code: '',
          err: '',
        };
        return state;
      case ActionType.BUNDLE_COMPLETE:
        state[action.payload.cellId] = {
          loading: false,
          code: action.payload.bundleOutput.code,
          err: action.payload.bundleOutput.err,
        };
        return state;
      default:
        return state;
    }
  },
  initialState
);

export default reducer;
