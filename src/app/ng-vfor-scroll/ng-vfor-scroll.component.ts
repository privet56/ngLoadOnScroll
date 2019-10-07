import { Component, OnInit } from '@angular/core';
import {EleData, LotOfDataService} from "../lot-of-data.service";

@Component({
  selector: 'lons-ng-vfor-scroll',
  templateUrl: './ng-vfor-scroll.component.html',
  styleUrls: ['./ng-vfor-scroll.component.scss']
})
export class NgVForScrollComponent implements OnInit
{
  public allData: EleData[] = [];
  public loading: boolean;

  constructor(protected lotOfDataService: LotOfDataService)
  {

  }

  ngOnInit()
  {
    //this.allData = this.lotOfDataService.fetchAllImmediately();

    this.loading = true;
    this.lotOfDataService.fetchAll().then((allData:EleData[]) => {
      this.allData = allData;
      this.loading = false;
    });
  }
}
