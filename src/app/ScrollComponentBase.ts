import {LotOfDataService} from "./services/lot-of-data.service";
import {select, Store} from "@ngrx/store";
import {State} from "./reducers";
import {Observable} from "rxjs";
import {OnInit} from "@angular/core";
import {LoadAllData, LoadData} from "./states/lot-of-data.actions";
import {getIsLoadingSelector} from "./states/lot-of-data.selectors";

export class ScrollComponentBase implements OnInit
{
  loading$ : Observable<boolean>;

  constructor(protected lotOfDataService: LotOfDataService, protected store:Store<State>)
  {

  }
  ngOnInit()
  {
    this.loading$ = this.store.pipe(select(getIsLoadingSelector));
  }
  protected dispatchLoadAllData() : void
  {
    this.store.dispatch(new LoadAllData()); //request to fetch data from server via @Effect!
  }
  protected dispatchLoadData(skip:number, limit:number) : void
  {
    this.store.dispatch(new LoadData({skip, limit})); //request to fetch data from server via @Effect!
  }
}
