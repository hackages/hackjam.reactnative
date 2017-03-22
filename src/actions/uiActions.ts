import { IBooleanAction } from '../types/interfaces';

export const TOGGLE_SIGNUP_LOADING: string = 'TOGGLE_SIGNUP_LOADING';
export const toggleSignupLoading = (payload: boolean): IBooleanAction  => ({
  type: TOGGLE_SIGNUP_LOADING,
  payload
});

export const TOGGLE_LOGIN_LOADING: string = 'TOGGLE_LOGIN_LOADING';
export const toggleLoginLoading = (payload: boolean): IBooleanAction  => ({
  type: TOGGLE_LOGIN_LOADING,
  payload
});
