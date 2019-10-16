import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {EleData, LotOfDataService} from "../services/lot-of-data.service";
import {StyleService} from "../services/style.service";
import {select, Store} from "@ngrx/store";
import {State} from "../reducers";
import {AddBunAction, LoadAllData} from "../states/lot-of-data.actions";
import {Observable} from "rxjs";
import {
  getAllDataSelector,
  selectFromAllDataById,
  selectLargeBunnyCountFromAllDataById
} from "../states/lot-of-data.selectors";

@Component({
  selector: 'lons-list-ele',
  templateUrl: './list-ele.component.html',
  styleUrls: ['./list-ele.component.scss']
})
export class ListEleComponent implements OnInit
{
  //_data: EleData = null;
  // noinspection SpellCheckingInspection
  _dataindex: number = -1;
  _data$ : Observable<EleData>;
  _expanded$ : Observable<boolean>;
  public isMobile: boolean = false;

  constructor(public styleService: StyleService, public changeDetectorRef: ChangeDetectorRef, private store:Store<State>, protected lotOfDataService: LotOfDataService) {
  }

  ngOnInit()
  {
    this.styleService.mobileChanged$.subscribe((isMobile:boolean) => {
      this.isMobile = isMobile;
      StyleService.detectChanges(this.changeDetectorRef, "_data:"+this._dataindex);
    });
  }
  protected _initLocalState()
  { /*
    const ix:number = Math.floor(Math.random() * 5);
    this.buns = new Array<number>();
    for(let i:number = 0; i < ix;i++)
      this.buns.push(i);
    */
    this._data$ = this.store.pipe(select(selectFromAllDataById(this._dataindex)));
    this._expanded$ = this.store.pipe(select(selectLargeBunnyCountFromAllDataById(this._dataindex)));
/* dbg output
    const eleData: EleData = this.lotOfDataService.data.find((eleData:EleData) => eleData.index === this._dataindex);
    console.log("eleData("+this._dataindex+") = "+eleData);
    this._data$.subscribe((eleData:EleData) => {console.log("_data$("+this._dataindex+") = "+eleData)});
*/
  }
  onClickBun() : void
  {
/* version without state management (_data)
    //this.buns.push(this.buns.length);
*/
//version with statemanagement (_data$ | async)
    this.store.dispatch(new AddBunAction({add:1, eleId: this._dataindex}));

    StyleService.detectChanges(this.changeDetectorRef, "_data:" + this._dataindex);
  }
/* version without state management
  get expanded() : boolean
  {
    if(!this._data.buns) {
      return false;
    }
    const b: boolean = this._data.buns.length > 9;
    return b;
  }
*/
  @Input('data')
  set data(data: EleData)
  {
    if(data) {this._dataindex = data.index;}
    this._initLocalState();
  }
}
