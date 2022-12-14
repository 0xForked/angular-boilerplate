import {AppLang, AppTheme} from './app.type';

type StorageObjectMap = {
  'App/session': {
    user: string;
    token: string;
  };
  'App/theme': AppTheme;
  'App/language': AppLang;
};

export type StorageObjectType = 'App/session' | 'App/theme' | 'App/language';

export type StorageObjectData<T extends StorageObjectType> = {
  type: T;
  data: StorageObjectMap[T];
};
