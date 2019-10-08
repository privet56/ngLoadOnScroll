import {Component, Input, OnInit} from '@angular/core';
import {EleData} from "../lot-of-data.service";

@Component({
  selector: 'lons-list-ele',
  templateUrl: './list-ele.component.html',
  styleUrls: ['./list-ele.component.scss']
})
export class ListEleComponent implements OnInit
{
  @Input()
  data: EleData;

  clk: Array<number> = [];

  constructor() { }

  ngOnInit()
  {
    const ix:number = Math.floor(Math.random() * 5);
    this.clk = new Array<number>();
    for(let i:number = 0; i < ix;i++)
      this.clk.push(i);
  }
  onClickBun() : void
  {
    this.clk.push(this.clk.length);
  }
  get expanded() : boolean
  {
    const b: boolean = this.clk.length > 9;
    return b;
  }
}
