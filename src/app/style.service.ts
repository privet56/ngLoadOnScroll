import {ChangeDetectorRef, Injectable} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";
import {BehaviorSubject, Observable} from "rxjs";

/*
SETUP in main component:
  this.styleService.setup(changeDetectorRef);
USAGE in .ts:
  this.styleService.mobileChanged$.subscribe((isMobile:boolean) => {
      console.log("AppComponent: isMobile:" + isMobile);
  });
USAGE in html:
  <div [class.is-mobile]="this.styleService.mobileChanged$ | async">
*/

@Injectable({
  providedIn: 'root'
})
export class StyleService
{
  protected mobileQuery: MediaQueryList;
  protected _mobileQueryListener: () => void;
  protected mobileChangedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public mobileChanged$: Observable<boolean> = this.mobileChangedSubject.asObservable();

  constructor(public media: MediaMatcher)
  {

  }

  public setup(changeDetectorRef: ChangeDetectorRef)
  {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => {
      this.onMobileLayoutChanged();
      StyleService.detectChanges(changeDetectorRef, "StyleService");
    }

    this.mobileQuery.addListener(this._mobileQueryListener);  // TODO: use better onchange or addEventListener
    this.onMobileLayoutChanged();
  }

  public onMobileLayoutChanged() : void
  {
    //console.log("onMobileLayoutChanged: matches:" + this.mobileQuery.matches + " media:" + this.mobileQuery.media);
    this.mobileChangedSubject.next(this.mobileQuery.matches);
  }

  ngOnDestroy(): void // I know, I know ...
  {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public static detectChanges(changeDetectorRef: ChangeDetectorRef, desc:string) : boolean
  {
    try
    {
      changeDetectorRef.detectChanges();
      return true;
    }
    catch (e)
    {
      console.log("WRN:!detectChanges " + desc);
      return false;
    }
  }
}
