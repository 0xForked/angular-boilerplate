import {TestBed} from '@angular/core/testing';
import {I18nPipe} from './i18n.pipe';
import {APP_INITIALIZER} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {I18nService, setupTranslateFactory} from '../../services/i18n.service';

describe('I18nPipe', () => {
  let translate: I18nPipe;
  let i18service: I18nService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [I18nService, {
        provide: APP_INITIALIZER,
        useFactory: setupTranslateFactory,
        deps: [ I18nService ],
        multi: true
      }]
    });

    TestBed.inject(HttpClientTestingModule);
    i18service = TestBed.inject(I18nService);
    translate = new I18nPipe(i18service);
  });

  it('I18nPipe transform expected pass', () => {
    expect(translate).toBeTruthy();
    i18service.use('en');
    expect(translate.transform('test')).toBe('test');
  });
});
