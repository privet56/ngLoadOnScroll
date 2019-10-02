import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgxVirtScrollComponent} from "./ngx-virt-scroll/ngx-virt-scroll.component";
import {NgVForScrollComponent} from "./ng-vfor-scroll/ng-vfor-scroll.component";
import {NgxInfiniteScrollComponent} from "./ngx-infinite-scroll/ngx-infinite-scroll.component";

const routes: Routes = [
  {path: 'ngxVirtScroll', component: NgxVirtScrollComponent},
  {path: 'ngxInfiniteScroll', component: NgxInfiniteScrollComponent},
  {path: 'ngVForScroll', component: NgVForScrollComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
