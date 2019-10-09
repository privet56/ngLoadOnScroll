import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {StyleService} from "./style.service";

@Component({
  selector: 'lons-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

  constructor(public changeDetectorRef: ChangeDetectorRef, public styleService: StyleService)
  {
    this.styleService.setup(this.changeDetectorRef);
  }
  ngOnInit()
  {

  }

  closeSideNav() {
    this.sidenav.close();
  }
  sideNavOpen() : void {
    this.sidenav.open();
  }
  get sideNavIsOpened() : boolean {
    if(!this.sidenav) return true;
    return this.sidenav.opened;
  }
}
