import {Component, Input, OnInit} from '@angular/core';
import {EleData} from "../lot-of-data.service";

@Component({
  selector: 'lons-list-ele',
  templateUrl: './list-ele.component.html',
  styleUrls: ['./list-ele.component.scss']
})
export class ListEleComponent implements OnInit
{
  buns: Array<number> = null;
  _data: EleData = null;

  constructor() { }

  ngOnInit()
  {

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
  }
  get expanded() : boolean
  {
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
