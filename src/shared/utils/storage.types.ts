import {AppTheme} from '../constants/default.costant';

type StorageObjectMap = {
  'App/session': {
    user: string;
    token: string;
  };
  'App/theme': AppTheme;
};

export type StorageObjectType = 'App/session' | 'App/theme';

export type StorageObjectData<T extends StorageObjectType> = {
  type: T;
  data: StorageObjectMap[T];
};
