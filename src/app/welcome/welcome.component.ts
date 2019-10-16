import { Component, OnInit } from '@angular/core';
import {EleData, LotOfDataService} from "../services/lot-of-data.service";
import {StyleService} from "../services/style.service";
import {Store} from "@ngrx/store";
import {State} from "../reducers";
import {ScrollComponentBase} from "../ScrollComponentBase";

@Component({
  selector: 'lons-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent extends ScrollComponentBase implements OnInit
{
  public item: EleData = null;
  LotOfDataService = LotOfDataService;

  constructor(lotOfDataService: LotOfDataService, public styleService: StyleService, store:Store<State>)
  {
    super(lotOfDataService, store);
  }

  ngOnInit()
  {
    this.dispatchLoadAllData();

    setInterval(() => {
      this.item = this.lotOfDataService.data[Math.floor(Math.random()*this.lotOfDataService.data.length)];
    }, LotOfDataService.WEBSERVICEBACKENDTIME * 3);
  }
}
