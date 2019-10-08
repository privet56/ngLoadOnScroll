# ngLoadOnScroll

Bootstrap project:
```sh
ng new ngLoadOnScroll --directory=. --prefix=lons
npm install   # better: npm ci
ng serve --host 0.0.0.0 --disableHostCheck true
# open browser with http://localhost:4200/
```

<img src="src/assets/ngloadonscroll.gif" />


## Virtual (=lazy-loaded) List Libs:

### 1.  https://github.com/rintoj/ngx-virtual-scroller
    > npm install ngx-virtual-scroller --save
    
### 2. https://github.com/anagram4wander/ng-vfor-lib
  ```sh
      npm install ngvforlib --save
      -- after the installation, unpack received tgz, but keep package.json
  ```
#### Gotchas
   * No working npm install package available
   * TODO: check if the fork https://github.com/jamaks/ng-vfor-lib is better.!?
   * TODO: how to reset ele values on list-ele reuse?
  
### 3. https://github.com/orizens/ngx-infinite-scroll
    > npm install ngx-infinite-scroll --save

### 4. https://www.primefaces.org/primeng/#/
  ```sh
  npm install primeng --save
  npm install primeicons --save
  ```
#### Gotchas
   * TODO: how to reset ele values on list-ele reuse?
   * TODO: how to handle item height change?
   * Relative Size (eg. 100%) not possible > manual resize necessary
  
## Lib Sizes:
1. visualize lib size to see, which lib is small enough
```sh
  npm install --save-dev webpack-bundle-analyzer
  npm run build:stats # see package.json
  npm run analyze     # see package.json # opens browser with http://127.0.0.1:8888/
  ```

<img src="src/assets/ngloadonscroll.libsizes.png" width="550px" />
