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

  rnd: Array<number> = [];

  constructor() { }

  ngOnInit()
  {
    const ix:number = Math.floor(Math.random() * 5);
    this.rnd = new Array<number>();
    for(let i:number = 0; i < ix;i++)
      this.rnd.push(i);
  }
}
