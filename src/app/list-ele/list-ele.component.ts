import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {EleData, LotOfDataService} from "../services/lot-of-data.service";
import {StyleService} from "../services/style.service";
import {select, Store} from "@ngrx/store";
import {State} from "../reducers";
import {AddBunAction, LoadAllData} from "../states/lot-of-data.actions";
import {Observable} from "rxjs";
import {getAllDataSelector, selectFromAllDataById} from "../states/lot-of-data.selectors";

@Component({
  selector: 'lons-list-ele',
  templateUrl: './list-ele.component.html',
  styleUrls: ['./list-ele.component.scss']
})
export class ListEleComponent implements OnInit
{
  _data: EleData = null;
  _data$ : Observable<EleData>;
  public isMobile: boolean = false;

  constructor(public styleService: StyleService, public changeDetectorRef: ChangeDetectorRef, private store:Store<State>) {
  }

  ngOnInit()
  {
    this.styleService.mobileChanged$.subscribe((isMobile:boolean) => {
      this.isMobile = isMobile;
      StyleService.detectChanges(this.changeDetectorRef, "_data:"+(this._data ? (this._data.index +":"+ this._data.name) : "[!_data]\""));
    });
    this._data$ = this.store.pipe(select(selectFromAllDataById(this._data.index)));
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
/* version without state management (_data)
    //this.buns.push(this.buns.length);
    //StyleService.detectChanges(this.changeDetectorRef, "_data:"+(this._data ? (this._data.index +":"+ this._data.name) : "[!_data]\""));
*/
//version with statemanagement (_data$ | async)
    this.store.dispatch(new AddBunAction({add:1, eleId: this._data.index}));
  }
  get expanded() : boolean
  {
    if(!this._data.buns) {
      return false;
    }
    const b: boolean = this._data.buns.length > 9;
    return b;
  }
  @Input('data')
  set data(data: EleData)
  {
    this._data = data;
    this._initLocalState();
  }
}
