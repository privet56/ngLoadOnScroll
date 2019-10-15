import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  LoadAllData,
  LoadData,
  LoadDataError,
  LoadedAllData,
  LoadedData,
  LotOfDataActionTypes
} from "./lot-of-data.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {EleData, LotOfDataService} from "../services/lot-of-data.service";
import {of} from "rxjs";
import {Store} from "@ngrx/store";
import {State} from "../reducers";

@Injectable()
export class LotOfDataEffects
{
  constructor(private actions$: Actions, protected lotOfDataService: LotOfDataService, private store:Store<State>) {}

  @Effect({dispatch:true})  // true = effect produces another action!
  loadAllData$ = this.actions$.pipe(ofType<LoadAllData>(LotOfDataActionTypes.LoadAllData),
    mergeMap(action => this.lotOfDataService.fetchAllAsObservable().pipe(
      catchError(err => {
        console.log("loadAllData$.err:" + err);
        this.store.dispatch(new LoadDataError(err));
        return of([]);
      }),
    )),
    map((data: EleData[]) => {
      return new LoadedAllData({allData:data})
    })
  );

  @Effect({dispatch:true})  // true = effect produces another action!
  loadData$ = this.actions$.pipe(ofType<LoadData>(LotOfDataActionTypes.LoadData),
    mergeMap(action => this.lotOfDataService.fetchNextChunkAsObservable(action.payload.skip, action.payload.limit).pipe(
      catchError(err => {
        console.log("loadData$.err:" + err);
        this.store.dispatch(new LoadDataError(err));
        return of([]);
      }),
    )),
    map((data: EleData[]) => new LoadedData({data:data}))
  );
}
