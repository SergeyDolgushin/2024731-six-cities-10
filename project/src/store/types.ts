import { AuthorizationStatus } from '../const';

type Name = string;
type Filter = string;
type Error = string | null;

type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type { Name, Filter, Error, UserProcess };
