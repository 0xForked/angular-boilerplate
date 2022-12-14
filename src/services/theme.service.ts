import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import { storage } from '../shared/utils/storage.util';
import { BehaviorSubject, fromEventPattern, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DEFAULT_BASE_THEME } from '../shared/constants/default.costant';
import { AppTheme } from '../shared/types/app.type';

@Injectable({
  providedIn: 'root',
})
export class ThemeService implements OnDestroy {
  currentTheme$ = new BehaviorSubject<AppTheme | null>(this._storedTheme);

  private _destroy$ = new Subject();
  private readonly _mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  public get currentTheme(): AppTheme | null {
    return this.currentTheme$.getValue();
  }

  public get systemTheme(): AppTheme {
    return this._mediaQuery.matches ? 'dark' : 'light';
  }

  private get _storedTheme(): AppTheme | null {
    return storage.getItem('App/theme');
  }

  private set _storedTheme(theme: AppTheme | null) {
    storage.setItem('App/theme', theme as AppTheme);
  }

  constructor(@Inject(DOCUMENT) private _document: Document) {}

  ngOnDestroy(): void {
    this._destroy$.complete();
    this._destroy$.unsubscribe();
  }

  init(): void {
    this.setTheme(this._storedTheme || DEFAULT_BASE_THEME);
    this._listenForMediaQueryChanges();
  }

  /**
   * Manually changes theme in LocalStorage & HTML body
   *
   * @param theme new theme
   */
  setTheme(theme: AppTheme): void {
    this._clearThemes();
    this._storedTheme = theme;

    let bodyClass = theme;
    this.currentTheme$.next(bodyClass);

    if (theme === 'system') {
      bodyClass = this.systemTheme;
    }
    this._document.body.classList.add(bodyClass);
  }

  /**
   * Handles system theme changes & applies theme automatically
   *
   */
  private _listenForMediaQueryChanges(): void {
    fromEventPattern<MediaQueryListEvent>(
      (handler: EventListener) => this._mediaQuery.addEventListener('change', handler),
      (handler: EventListener) => this._mediaQuery.removeEventListener('change', handler),
    ).pipe(takeUntil(this._destroy$)).subscribe(() => {
        if (this._storedTheme === 'system') {
          this.setTheme('system');
        }
      });
  }

  /**
   * Clears all themes in ThemeList enum from the HTML element
   *
   */
  private _clearThemes(): void {
    this._document.body.classList.remove('system', 'light', 'dark');
  }
}
