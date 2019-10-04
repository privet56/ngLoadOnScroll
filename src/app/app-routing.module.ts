import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgxVirtScrollComponent} from "./ngx-virt-scroll/ngx-virt-scroll.component";
import {NgVForScrollComponent} from "./ng-vfor-scroll/ng-vfor-scroll.component";
import {NgxInfiniteScrollComponent} from "./ngx-infinite-scroll/ngx-infinite-scroll.component";
import {PrimengScrollComponent} from "./primeng-scroll/primeng-scroll.component";
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes = [
  {path: 'ngxVirtScroll', component: NgxVirtScrollComponent},
  {path: 'ngxInfiniteScroll', component: NgxInfiniteScrollComponent},
  {path: 'ngVForScroll', component: NgVForScrollComponent},
  {path: 'primeNG', component: PrimengScrollComponent},
  { path: '**', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
