import {AppTheme} from '@lib/services/theme';
import {ILoginResponse} from "@lib/interfaces/ilogin-response";
import {UserType} from "@lib/enums/user-type";

type StorageObjectMap = {
  'App/session': ILoginResponse;
  'App/theme': AppTheme;
  'App/token': string;
  'App/user': IAppUser
};

export type StorageObjectType = 'App/session' | 'App/theme' | 'App/token' | 'App/user';

export type StorageObjectData<T extends StorageObjectType> = {
  type: T;
  data: StorageObjectMap[T];
};

export interface IAppUser {
  id: string;
  email: string;
  role: UserType
}
