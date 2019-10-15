import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EleData, LotOfDataService} from "../services/lot-of-data.service";
import {LazyLoadEvent} from "primeng/api";
import {StyleService} from "../services/style.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'lons-primeng-scroll',
  templateUrl: './primeng-scroll.component.html',
  styleUrls: ['./primeng-scroll.component.scss']
})
export class PrimengScrollComponent implements OnInit, AfterViewInit
{
  @ViewChild('scrollParent', { static: false })
  public scrollParent : ElementRef = null;
  public scrollHeight = "555px";

  public buffer: EleData[] = [];
  public loading: boolean;

  constructor(protected lotOfDataService: LotOfDataService, public styleService: StyleService) { }

  ngOnInit()
  {
    this.loadItemsLazy(null);
  }
  ngAfterViewInit(): void
  {
    this.setScrollHeight({target:{}});
  }

  loadItemsLazy($event : LazyLoadEvent)
  {
    //event.first = First row offset
    //event.rows = Number of rows per page
    //this.buffer = load new chunk between first index and (first + rows) last index

    const start: number = $event && $event.first ? $event.first : this.buffer.length;
    const limit: number = $event && $event.rows ? $event.rows : 10;

    //console.log("PrimengScrollComponent:loadItemsLazy: start:"+start+" limit:"+limit);

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
  public setScrollHeight($event) : void
  {
    if(!this.scrollParent)
      return;

    const h = this.scrollParent.nativeElement.offsetHeight - 20;
    //let h = (<HTMLElement>this.scrollParent.nativeElement).getBoundingClientRect().height - 70; //same as above
    //console.log("h="+h+" <> "+$event.target.innerHeight);
    this.scrollHeight = h + "px";
  }

  public getItemSize() : Observable<number> {
    return this.styleService.mobileChanged$.pipe(map((isMobile:boolean) => isMobile ? 150 : 100));
  }
}
