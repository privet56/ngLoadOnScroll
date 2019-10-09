# ngLoadOnScroll

Bootstrap project:
```sh
ng new ngLoadOnScroll --directory=. --prefix=lons
npm install   # better: npm ci
ng serve --host 0.0.0.0 --disableHostCheck true
# open browser with http://localhost:4200/
```

<img src="src/assets/ngloadonscroll.gif" />
<img src="src/assets/ngloadonscroll.mobile.gif" />

## Virtual (=lazy-loaded) List Libs:

### 1.  https://github.com/rintoj/ngx-virtual-scroller
    > npm install ngx-virtual-scroller --save
    
### 2. https://github.com/anagram4wander/ng-vfor-lib
  ```sh
      npm install ngvforlib --save
      -- after the installation, unpack received tgz, but keep package.json
  ```
#### Gotchas
   * **No working npm install package available!**
   * TODO: check if the fork https://github.com/jamaks/ng-vfor-lib is better.!?
  
### 3. https://github.com/orizens/ngx-infinite-scroll
    > npm install ngx-infinite-scroll --save

### 4. https://www.primefaces.org/primeng/#/
  ```sh
  npm install primeng --save
  npm install primeicons --save
  ```
#### Gotchas
   * VirtualScroller: cannot handle item height change!
   * VirtualScroller: relative Size (eg. 100%) not possible =>
      <a href="src/app/primeng-scroll/primeng-scroll.component.ts">manual resize necessary</a>
   * CSS size is large (PrimeNG makes more sense, when using several components)
#### Cool
   * DataView is auto-sized, so, no manual styling necessary

## Q&A
   * Q: How to reset list-element state on list-ele reuse?
      * A: override @Input setter and reset internal state in it!
   * Q: ChangeDetectorRef.detectChanges sometimes fails & throws an exception
      * A: Don't worry, it can happen when list elements are **reused**; old/invalid elements cannot be (and don't need to be) re-rendered.  
  
## Lib Sizes:
1. visualize lib size to see, which lib is small enough
```sh
  npm install --save-dev webpack-bundle-analyzer
  npm run build:stats # see package.json
  npm run analyze     # see package.json # opens browser with http://127.0.0.1:8888/
  ```

<img src="src/assets/ngloadonscroll.libsizes.png" width="550px" />
