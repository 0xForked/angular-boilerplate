import { Pipe, PipeTransform } from '@angular/core';
import {I18nService} from '../../services/i18n.service';

@Pipe({ name: 'translate', pure: false})
export class I18nPipe implements PipeTransform {
  constructor(private translate: I18nService) {}

  transform(key: string): string {
    return this.translate.data[key] || key;
  }
}
