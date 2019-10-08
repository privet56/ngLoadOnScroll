import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EleData, LotOfDataService} from "../lot-of-data.service";
import {LazyLoadEvent} from "primeng/api";

@Component({
  selector: 'lons-primengdataview-scroll',
  templateUrl: './primengdataview-scroll.component.html',
  styleUrls: ['./primengdataview-scroll.component.scss']
})
export class PrimengdataviewScrollComponent implements OnInit
{
  LotOfDataService = LotOfDataService;

  public buffer: EleData[] = [];
  public loading: boolean;

  constructor(protected lotOfDataService: LotOfDataService) { }

  ngOnInit()
  {
    this.loadItemsLazy(null);
  }

  loadItemsLazy($event : LazyLoadEvent)
  {
    //event.first = First row offset
    //event.rows = Number of rows per page
    //this.buffer = load new chunk between first index and (first + rows) last index

    const start: number = $event && ($event.first !== undefined) ? $event.first : this.buffer.length;
    const limit: number = $event && $event.rows ? $event.rows : 10;

    console.log("loadItemsLazy: start:"+start+" limit:"+limit);

    this.loading = true;
    this.lotOfDataService.fetchNextChunk(start, limit).then((chunk:EleData[]) => {

      this.buffer = chunk.slice(start);
      this.loading = false;
      //console.log("loadItemsLazy: start:"+start+" limit:"+limit+" DONE. #buffer:"+this.buffer.length);

    }, () => {
      this.loading = false
    });
  }

  get totalLazyItemsLength() : number
  {
    return LotOfDataService.ELEDATA_SIZE;
  }
  onPage()
  {

  }
}
