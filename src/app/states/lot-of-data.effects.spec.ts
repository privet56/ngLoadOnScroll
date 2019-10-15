import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LotOfDataEffects } from './lot-of-data.effects';

describe('LotOfDataEffects', () => {
  let actions$: Observable<any>;
  let effects: LotOfDataEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LotOfDataEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<LotOfDataEffects>(LotOfDataEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
