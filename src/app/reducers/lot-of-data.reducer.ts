import { Action } from '@ngrx/store';
import {EleData} from "../services/lot-of-data.service";
import {
  AddBunAction,
  LoadDataError,
  LoadedAllData,
  LoadedData,
  LotOfDataActionTypes
} from "../states/lot-of-data.actions";

export interface LotOfDataState {
  allData:EleData[],
  data:EleData[],
  loading: boolean,
  error: string
}

export const initialState: LotOfDataState = {
  allData: [],
  data: [],
  loading: false,
  error: null
};

export function lotOfDataReducer(state = initialState, action: Action): LotOfDataState
{
  switch (action.type)
  {
    case LotOfDataActionTypes.LoadAllData:
      return { ...state, loading: true };
    // advanced feature. use EntityAdatapter(createEntityAdapter, addOne, addMany) & EntityState
    case LotOfDataActionTypes.LoadedAllData:
    {
      return {...state, loading: false, allData: (action as LoadedAllData).payload.allData, error: null};
    }

    case LotOfDataActionTypes.LoadData:
      return { ...state, loading: true };

    case LotOfDataActionTypes.LoadedData:
      return { ...state, loading: false, data: (action as LoadedData).payload.data, error: null };

    case LotOfDataActionTypes.LoadDataError:
      return { ...state, loading: false, error: (action as LoadDataError).payload.error };

    case LotOfDataActionTypes.AddBun:
      const a: AddBunAction = (action as AddBunAction);
      const newEleData: EleData[] = state.data.map((eleData: EleData) => { return a.payload.eleId == eleData.index ? EleData.withAddBuns(eleData, a.payload.add) : eleData });
      const newAllEleData: EleData[] = state.allData.map((eleData: EleData) => { return a.payload.eleId == eleData.index ? EleData.withAddBuns(eleData, a.payload.add) : eleData });
      return { ...state, allData: newAllEleData, data: newEleData };

    default:
      return state;
  }
}
