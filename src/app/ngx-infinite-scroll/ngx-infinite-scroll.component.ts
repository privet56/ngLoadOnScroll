import {Component, OnDestroy, OnInit} from '@angular/core';
import {EleData, LotOfDataService} from "../services/lot-of-data.service";
import {ScrollComponentBase} from "../ScrollComponentBase";
import {Observable} from "rxjs";
import {select, State, Store} from "@ngrx/store";
import {State as AppState} from "../reducers";
import {getDataSelector} from "../states/lot-of-data.selectors";

@Component({
  selector: 'lons-ngx-infinite-scroll',
  templateUrl: './ngx-infinite-scroll.component.html',
  styleUrls: ['./ngx-infinite-scroll.component.scss']
})
export class NgxInfiniteScrollComponent extends ScrollComponentBase implements OnInit, OnDestroy
{
//  public buffer: EleData[] = [];
//  public loading: boolean;

  public buffer$: Observable<EleData[]>;

  constructor(protected lotOfDataService: LotOfDataService, store:Store<AppState>, private state:State<AppState>) { super(lotOfDataService, store); }

  ngOnInit()
  {
    super.ngOnInit();
    this.buffer$ = this.store.pipe(select(getDataSelector));
    this.onScroll(null);
  }
  ngOnDestroy(): void
  {
    super.ngOnDestroy();
  }

  onScroll($event)
  {
    const buffer: EleData[] = this.state.getValue().lotOfData.data;

    this.dispatchLoadData(buffer.length, 20);
/*
    this.loading = true;
    this.lotOfDataService.fetchNextChunk(this.buffer.length, 20).then(chunk => {

      this.buffer = chunk;
      this.loading = false;

    }, () => {
      this.loading = false
    });
*/
  }
  onScrollUp($event)
  {
    console.log("onScrollUP");
  }

  allElementsLoaded() : boolean {

    const buffer: EleData[] = this.state.getValue().lotOfData.data;
    return buffer.length >= LotOfDataService.ELEDATA_SIZE;
  }
}
