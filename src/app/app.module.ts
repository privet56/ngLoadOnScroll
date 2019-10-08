import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { MatToolbarModule } from '@angular/material/toolbar'; // better group these dependencies in a separate module
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import { NgxVirtScrollComponent } from './ngx-virt-scroll/ngx-virt-scroll.component';
import { NgxInfiniteScrollComponent } from './ngx-infinite-scroll/ngx-infinite-scroll.component';
import { NgVForScrollComponent } from './ng-vfor-scroll/ng-vfor-scroll.component';
import { PrimengScrollComponent } from './primeng-scroll/primeng-scroll.component';
import { ListEleComponent } from './list-ele/list-ele.component';
import { WelcomeComponent } from './welcome/welcome.component';

// import { NgGUDCoreModule } from 'ng-vfor-lib'; //described on the website
import { NgGUDCoreModule } from 'ngvforlib';

import { VirtualScrollerModule } from 'ngx-virtual-scroller';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import {VirtualScrollerModule as PrimeNGVirtualScrollerModule} from 'primeng/virtualscroller';
import {DataViewModule} from 'primeng/dataview';
import { PrimengdataviewScrollComponent } from './primengdataview-scroll/primengdataview-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxVirtScrollComponent,
    NgxInfiniteScrollComponent,
    NgVForScrollComponent,
    PrimengScrollComponent,
    ListEleComponent,
    WelcomeComponent,
    PrimengdataviewScrollComponent
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    VirtualScrollerModule,
    NgGUDCoreModule,
    InfiniteScrollModule,
    PrimeNGVirtualScrollerModule,
    DataViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
