import { Action } from '@ngrx/store';
import {EleData} from "../services/lot-of-data.service";

export enum LotOfDataActionTypes {
  LoadAllData = '[LotOfData] LoadAllData',
  LoadedAllData = '[LotOfData] LoadedAllData',

  LoadData = '[LotOfData] LoadData',
  LoadedData = '[LotOfData] LoadedData',

  LoadDataError = '[LotOfData] LoadDataError',

  AddBun = '[LotOfData] AddBun',
}

export class LoadAllData implements Action {
  readonly type = LotOfDataActionTypes.LoadAllData;
  //constructor() { console.log("LoadAllData:constructor"); }
}
export class LoadedAllData implements Action {
  readonly type = LotOfDataActionTypes.LoadedAllData;
  constructor(public payload: {allData:EleData[]}) { }
}

export class LoadData implements Action {
  readonly type = LotOfDataActionTypes.LoadData;
  constructor(public payload: {skip: number, limit: number}) { }
}
export class LoadedData implements Action {
  readonly type = LotOfDataActionTypes.LoadedData;
  constructor(public payload: {data:EleData[]}) { }
}

export class LoadDataError implements Action {
  readonly type = LotOfDataActionTypes.LoadDataError;
  constructor(public payload: {error:string}) { }
}

export class AddBunAction implements Action {
  readonly type = LotOfDataActionTypes.AddBun;
  constructor(public payload: {add: number, eleId: number}) { }
}

export type LotOfDataActions = LoadAllData | LoadedAllData | LoadData | LoadedData | LoadDataError | AddBunAction;
