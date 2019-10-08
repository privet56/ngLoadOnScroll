import { Component, OnInit } from '@angular/core';
import {EleData, LotOfDataService} from "../lot-of-data.service";

@Component({
  selector: 'lons-ngx-infinite-scroll',
  templateUrl: './ngx-infinite-scroll.component.html',
  styleUrls: ['./ngx-infinite-scroll.component.scss']
})
export class NgxInfiniteScrollComponent implements OnInit
{
  public buffer: EleData[] = [];
  public loading: boolean;

  constructor(protected lotOfDataService: LotOfDataService) { }

  ngOnInit()
  {
    this.onScroll(null);
  }
  onScroll($event)
  {
    this.loading = true;
    this.lotOfDataService.fetchNextChunk(this.buffer.length, 10).then(chunk => {

      this.buffer = chunk;
      this.loading = false;

    }, () => {
      this.loading = false
    });
  }
  onScrollUp($event)
  {
    console.log("onScrollUP");
  }

  allElementsLoaded() : boolean {
    return this.buffer.length >= LotOfDataService.ELEDATA_SIZE;
  }
}
