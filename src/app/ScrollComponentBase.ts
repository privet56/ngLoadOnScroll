import {LotOfDataService} from "./services/lot-of-data.service";
import {select, Store} from "@ngrx/store";
import {State} from "./reducers";
import {Observable, Subscription} from "rxjs";
import {OnDestroy, OnInit} from "@angular/core";
import {LoadAllData, LoadData} from "./states/lot-of-data.actions";
import {getIsLoadingSelector} from "./states/lot-of-data.selectors";

export class ScrollComponentBase implements OnInit, OnDestroy
{
  public loading$ : Observable<boolean>;
  protected subscriptions: Array<Subscription> = [];

  constructor(protected lotOfDataService: LotOfDataService, protected store:Store<State>)
  {

  }
  ngOnInit()
  {
    this.dispatchLoadAllData();
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
  ngOnDestroy(): void
  {
    this.subscriptions.forEach((subscription:Subscription) => subscription.unsubscribe());
  }
}
