import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DEFAULT_LANGUAGE} from '../shared/constants/default.costant';
import {BehaviorSubject, Subject} from 'rxjs';
import {AppLang, AppTheme} from '../shared/types/app.type';
import {storage} from '../shared/utils/storage.util';

@Injectable({ providedIn: 'root' })
export class I18nService implements OnDestroy {
  currentLanguage$ = new BehaviorSubject<AppLang | null>(this._storedLanguage);

  data: any = {}

  private _destroy$ = new Subject();

  public get currentLanguage(): AppLang | null {
    return this.currentLanguage$.getValue();
  }

  private get _storedLanguage(): AppLang | null {
    return storage.getItem('App/language');
  }

  private set _storedLanguage(lang: AppLang | null) {
    storage.setItem('App/language', lang as AppLang);
  }

  constructor(private http: HttpClient) {}

  ngOnDestroy(): void {
    this._destroy$.complete();
    this._destroy$.unsubscribe();
  }

  async init(): Promise<void> {
    await this.use(this._storedLanguage || DEFAULT_LANGUAGE)
  }

  use(lang: AppLang): Promise<any> {
    this._storedLanguage = lang;
    this.currentLanguage$.next(this._storedLanguage);

    return new Promise<any>((resolve, _) => {
      const langPath = `assets/i18n/${lang}.json`

      this.http.get<any>(langPath).subscribe(translation => {
        this.data = Object.assign({}, translation || {})
        resolve(this.data)
      })
    })
  }
}

export const setupTranslateFactory = (i18n: I18nService) =>
  () => i18n.use(i18n.currentLanguage || DEFAULT_LANGUAGE)
