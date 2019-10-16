import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State} from "../reducers";
import {LotOfDataState} from "../reducers/lot-of-data.reducer";
import {EleData} from "../services/lot-of-data.service";

export const selectLotOfDataState = (state:State) => state.lotOfData;

//it memoizes!
export const getAllDataSelector = createSelector(selectLotOfDataState, /*otherSelector,*/ (lotOfData: LotOfDataState) => lotOfData.allData);
export const getDataSelector = createSelector(selectLotOfDataState, /*otherSelector,*/ (lotOfData: LotOfDataState) => lotOfData.data);
export const getIsLoadingSelector = createSelector(selectLotOfDataState, /*otherSelector,*/ (lotOfData: LotOfDataState) => lotOfData.loading);

export const selectAllData = createFeatureSelector<LotOfDataState>('allData');
export const selectIsLoading = createFeatureSelector<LotOfDataState>('loading');

export const getAllDataTotal = createSelector(getAllDataSelector, allData => allData.length);
export const getDataTotal = createSelector(getDataSelector, data => data.length);

//export const selectFromAllDataById = (id:number) => createSelector(getAllDataSelector, allData => allData.filter((eleData: EleData) => eleData.index === id));
export const selectFromAllDataById = (id:number) => createSelector(getAllDataSelector, allData => {
  const e:EleData = allData.find((eleData:EleData) => eleData.index === id);
  //console.log("eee("+id+"):"+e);
  return e;
});
export const selectFromDataById = (id:number) => createSelector(getDataSelector, data => data.filter((eleData: EleData) => eleData.index === id));
export const selectLargeBunnyCountFromAllDataById = (id:number) => createSelector(getAllDataSelector, allData => allData.find((eleData:EleData) => eleData.index === id).buns.length > 9);
