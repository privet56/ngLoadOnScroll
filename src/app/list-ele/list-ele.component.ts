import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {EleData} from "../lot-of-data.service";
import {StyleService} from "../style.service";

@Component({
  selector: 'lons-list-ele',
  templateUrl: './list-ele.component.html',
  styleUrls: ['./list-ele.component.scss']
})
export class ListEleComponent implements OnInit
{
  buns: Array<number> = new Array<number>();
  _data: EleData = null;
  public isMobile: boolean = false;

  constructor(public styleService: StyleService, public changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit()
  {
    this.styleService.mobileChanged$.subscribe((isMobile:boolean) => {
      this.isMobile = isMobile;
      StyleService.detectChanges(this.changeDetectorRef, "_data:"+(this._data ? (this._data.index +":"+ this._data.name) : "[!_data]\""));
    });
  }
  protected _initLocalState()
  { /*
    const ix:number = Math.floor(Math.random() * 5);
    this.buns = new Array<number>();
    for(let i:number = 0; i < ix;i++)
      this.buns.push(i);
    */
  }
  onClickBun() : void
  {
    this.buns.push(this.buns.length);
    StyleService.detectChanges(this.changeDetectorRef, "_data:"+(this._data ? (this._data.index +":"+ this._data.name) : "[!_data]\""));
  }
  get expanded() : boolean
  {
    if(!this.buns) {
      return false;
    }
    const b: boolean = this.buns.length > 9;
    return b;
  }
  @Input('data')
  set data(data: EleData)
  {
    this._data = data;
    this.buns = this._data.buns;
    this._initLocalState();
  }
}
