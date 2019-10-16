import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IPageInfo, VirtualScrollerComponent} from 'ngx-virtual-scroller';
import {EleData, LotOfDataService} from "../services/lot-of-data.service";
import {ScrollComponentBase} from "../ScrollComponentBase";
import {select, State, Store} from "@ngrx/store";
import {State as AppState} from "../reducers";
import {getAllDataSelector, getDataSelector} from "../states/lot-of-data.selectors";
import {Observable} from "rxjs";

@Component({
  selector: 'lons-ngx-virt-scroll',
  templateUrl: './ngx-virt-scroll.component.html',
  styleUrls: ['./ngx-virt-scroll.component.scss']
})
export class NgxVirtScrollComponent extends ScrollComponentBase implements OnInit, OnDestroy
{
  @ViewChild(VirtualScrollerComponent, {static: true})
  private virtualScroller: VirtualScrollerComponent;

  LotOfDataService = LotOfDataService;

//  public buffer: EleData[] = [];
//  public loading: boolean;
  public buffer$: Observable<EleData[]>;

  constructor(protected lotOfDataService: LotOfDataService, store:Store<AppState>, private state:State<AppState>) { super(lotOfDataService, store); }

  ngOnInit()
  {
    super.ngOnInit();
    this.buffer$ = this.store.pipe(select(getDataSelector));
    this.dispatchLoadData(0, 20);
  }
  ngOnDestroy(): void
  {
    super.ngOnDestroy();
  }

  public fetchMore(event: IPageInfo)
  {
    const buffer: EleData[] = this.state.getValue().lotOfData.data;

    if (event.endIndex !== buffer.length-1)
    {
      return;
    }

    this.dispatchLoadData(buffer.length, 10);

/* code without state management
    this.loading = true;
    this.lotOfDataService.fetchNextChunk(this.buffer.length, 10).then(chunk => {

      this.buffer = chunk;
      this.loading = false;

    }, () => {
      this.loading = false
    });
*/
  }
  protected onDataSizeChanged(newData: EleData[]) : void {
    this.virtualScroller.invalidateAllCachedMeasurements();
    this.virtualScroller.invalidateCachedMeasurementForItem(newData);
    this.virtualScroller.invalidateCachedMeasurementAtIndex(0);
    this.virtualScroller.scrollInto(newData[0]);
  }
  public afterResize() {  // call this function after resize + animation end
    this.virtualScroller.refresh();
  }
  public trackBy(index: number, item: EleData): number {
    return item.index;
  }
}
