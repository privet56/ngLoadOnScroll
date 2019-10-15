import { Component, OnInit } from '@angular/core';
import {EleData, LotOfDataService} from "../services/lot-of-data.service";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {State} from "../reducers";
import {LoadAllData} from "../states/lot-of-data.actions";
import {getAllDataSelector, getIsLoadingSelector} from "../states/lot-of-data.selectors";

@Component({
  selector: 'lons-ng-vfor-scroll',
  templateUrl: './ng-vfor-scroll.component.html',
  styleUrls: ['./ng-vfor-scroll.component.scss']
})
export class NgVForScrollComponent implements OnInit
{
/* version without state management
  public allData: EleData[] = [];
  public loading: boolean;
*/
// version with state management (use with | async in the template)
  loading$ : Observable<boolean>;
  allData$ : Observable<EleData[]>;

  constructor(protected lotOfDataService: LotOfDataService, private store:Store<State>)
  {

  }

  ngOnInit()
  {
/* version without state management
    this.loading = true;
    this.lotOfDataService.fetchAll().then((allData:EleData[]) => {
      this.allData = allData;
      this.loading = false;
    });
*/
    this.store.dispatch(new LoadAllData()); //request to fetch data from server via @Effect!
    this.allData$ = this.store.pipe(select(getAllDataSelector));
    this.loading$ = this.store.pipe(select(getIsLoadingSelector));
  }
}
