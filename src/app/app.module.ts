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


@NgModule({
  declarations: [
    AppComponent,
    NgxVirtScrollComponent,
    NgxInfiniteScrollComponent,
    NgVForScrollComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
