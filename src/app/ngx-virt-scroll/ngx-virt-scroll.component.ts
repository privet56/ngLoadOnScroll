import {Component, OnInit, ViewChild} from '@angular/core';
import {IPageInfo, VirtualScrollerComponent} from 'ngx-virtual-scroller';
import {EleData, LotOfDataService} from "../lot-of-data.service";

@Component({
  selector: 'lons-ngx-virt-scroll',
  templateUrl: './ngx-virt-scroll.component.html',
  styleUrls: ['./ngx-virt-scroll.component.scss']
})
export class NgxVirtScrollComponent implements OnInit
{
  @ViewChild(VirtualScrollerComponent, {static: true})
  private virtualScroller: VirtualScrollerComponent;

  LotOfDataService = LotOfDataService;

  public buffer: EleData[] = [];
  public loading: boolean;

  constructor(protected lotOfDataService: LotOfDataService) { }

  ngOnInit()
  {

  }
  public fetchMore(event: IPageInfo)
  {
    if (event.endIndex !== this.buffer.length-1)
    {
      return;
    }

    this.loading = true;
    this.lotOfDataService.fetchNextChunk(this.buffer.length, 10).then(chunk => {

      this.buffer = chunk;
      this.loading = false;

    }, () => {
      this.loading = false
    });
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
