import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {EleData, LotOfDataService} from "../services/lot-of-data.service";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {State} from "../reducers";
import {LoadAllData} from "../states/lot-of-data.actions";
import {getAllDataSelector, getIsLoadingSelector} from "../states/lot-of-data.selectors";
import {ScrollComponentBase} from "../ScrollComponentBase";
import {StyleService} from "../services/style.service";

@Component({
  selector: 'lons-ng-vfor-scroll',
  templateUrl: './ng-vfor-scroll.component.html',
  styleUrls: ['./ng-vfor-scroll.component.scss']
})
export class NgVForScrollComponent extends ScrollComponentBase implements OnInit, OnDestroy
{
/* version without state management
  public allData: EleData[] = [];
  public loading: boolean;
*/
// version with state management (use with | async in the template)
  allData$ : Observable<EleData[]>;

  constructor(lotOfDataService: LotOfDataService, store:Store<State>, public changeDetectorRef: ChangeDetectorRef)
  {
    super(lotOfDataService, store);
  }

  ngOnDestroy(): void
  {
    super.ngOnDestroy();
  }

  ngOnInit()
  {
    super.ngOnInit(); // loading$ = getIsLoadingSelector
    super.dispatchLoadAllData();

/* version without state management
    this.loading = true;
    this.lotOfDataService.fetchAll().then((allData:EleData[]) => {
      this.allData = allData;
      this.loading = false;
    });
*/

    this.allData$ = this.store.pipe(select(getAllDataSelector));

    this.subscriptions.push(this.store.pipe(select(getAllDataSelector)).subscribe((allData:EleData[]) => {
      setTimeout(() =>  StyleService.detectChanges(this.changeDetectorRef,"NgVForScrollComponent"), 1);
    }));
  }
}
