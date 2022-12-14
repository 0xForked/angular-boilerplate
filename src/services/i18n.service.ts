import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DEFAULT_LANGUAGE} from '../shared/constants/default.costant';

@Injectable({ providedIn: 'root' })
export class I18nService {
  data: any = {}

  constructor(private http: HttpClient) {}

  use(lang: string): Promise<any> {
    return new Promise<any>((resolve, _) => {
      const langPath = `assets/i18n/${lang || DEFAULT_LANGUAGE}.json`

      this.http.get<any>(langPath).subscribe(translation => {
        this.data = Object.assign({}, translation || {})
        resolve(this.data)
      })
    })
  }
}

export const setupTranslateFactory = (i18n: I18nService) =>
  () => i18n.use(DEFAULT_LANGUAGE)
