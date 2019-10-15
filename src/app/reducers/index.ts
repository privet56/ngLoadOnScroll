import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {lotOfDataReducer, LotOfDataState} from "./lot-of-data.reducer";

export interface State
{
  lotOfData: LotOfDataState,
}

export const reducers: ActionReducerMap<State> = {
  lotOfData: lotOfDataReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
