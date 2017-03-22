import { IPerson } from './interfaces';
import { User } from 'firebase';

export interface IAction {
  type: string,
  payload?: string
}

export interface IBooleanAction {
  type: string,
  payload: boolean
}

export interface ILoginFormAction extends IAction {
  value: string,
}

export interface IFirebaseUserAction {
  type: string,
  payload: User
}

export interface IGetRSVPAction {
  type: string,
  payload: IPerson[],
}

export interface IFilterRSVPAction {
  type: string,
  payload: string,
}
