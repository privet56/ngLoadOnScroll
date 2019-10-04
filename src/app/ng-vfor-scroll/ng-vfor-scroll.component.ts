import { Component, OnInit } from '@angular/core';
import {EleData, LotOfDataService} from "../lot-of-data.service";

@Component({
  selector: 'lons-ng-vfor-scroll',
  templateUrl: './ng-vfor-scroll.component.html',
  styleUrls: ['./ng-vfor-scroll.component.scss']
})
export class NgVForScrollComponent implements OnInit
{
  protected allData: EleData[] = [];
  constructor(protected lotOfDataService: LotOfDataService) { }

  ngOnInit()
  {
    this.lotOfDataService.fetchAll().then(allData => {
      this.allData = allData;
    });
  }
  getSize() : number {
    return 99;
  }
}
