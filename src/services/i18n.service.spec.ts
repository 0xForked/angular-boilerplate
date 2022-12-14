import {I18nService} from './i18n.service';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('I18nService', () => {
  let httpTestingController: HttpTestingController;
  let service: I18nService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(I18nService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should use lang expect failed', () => {
    const defaultLang = 'not_found';
    service.use(defaultLang).then(() => {
      expect(service.data).toBeDefined();
      expect(service.data).toBeInstanceOf(Object);
    });

    const i18nFilePath = `assets/i18n/${defaultLang}.json`;
    const req = httpTestingController.expectOne(i18nFilePath);
    expect(req.request.method).toEqual('GET');
  });

  it('should use lang expect success', () => {
    const defaultLang = 'en';
    service.use(defaultLang).then(() => {
      expect(service.data).toBeDefined();
      expect(service.data).toBeInstanceOf(Object);
      expect(service.data.hello).toEqual('hello world');
    });

    const i18nFilePath = `assets/i18n/${defaultLang}.json`;
    const req = httpTestingController.expectOne(i18nFilePath);
    expect(req.request.method).toEqual('GET');
    req.flush({hello: 'Hello World'});
  });
});
