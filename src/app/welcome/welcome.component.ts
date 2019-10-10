import { Component, OnInit } from '@angular/core';
import {EleData, LotOfDataService} from "../lot-of-data.service";
import {StyleService} from "../style.service";

@Component({
  selector: 'lons-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit
{
  public item: EleData = null;
  LotOfDataService = LotOfDataService;

  constructor(protected lotOfDataService: LotOfDataService, public styleService: StyleService) { }

  ngOnInit()
  {
    this.item = this.lotOfDataService.data[0];
    setInterval(() => {
      this.item = this.lotOfDataService.data[Math.floor(Math.random()*this.lotOfDataService.data.length)];
    }, 3333);
  }
}
