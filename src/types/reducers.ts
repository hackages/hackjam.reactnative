import { User } from 'firebase';
import { IPerson } from './interfaces';

export interface IAuthReducer {
  loggedIn: boolean,
  user: User,
  loginErr: string,
  logoutErr: string,
  signupErr: string,
}

export interface IUiReducer {
  loginSpinner: boolean,
  signupSpinner: boolean,
}

export interface IFirebaseReducer {
  users: IPerson[],
  filteredList: IPerson[],
}
