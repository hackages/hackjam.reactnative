import { IAction, ISignupUser, IFirebaseUserAction } from '../types/interfaces';
import firebase, { User, FirebaseError } from 'firebase';
import { toggleLoginLoading, toggleSignupLoading } from './index';

const errorFactory = (type: string, payload: string) => ({type, payload});

export const FAILED_SIGNUP: string = 'FAILED_SIGNUP';
const failedSignup = ({message}: {message: string}) => 
  errorFactory(FAILED_SIGNUP, message);

export const FAILED_LOGIN: string = 'FAILED_LOGIN';
const failedLogin = ({message}: {message: string}) => 
  errorFactory(FAILED_LOGIN, message);

export const FAILED_LOGOUT: string = 'FAILED_LOGOUT';
const failedLogout = ({message}: {message: string}) => 
  errorFactory(FAILED_LOGOUT, message);

export const CLEAR_ERRORS: string = 'CLEAR_ERRORS';
export const clearErrors = (): IAction => ({
  type: CLEAR_ERRORS
});

export function signup({email, displayName, password}: ISignupUser): Function {
  return (dispatch: Function) => {
    dispatch(toggleSignupLoading(true));
    dispatch(clearErrors());
    firebase.auth().createUserWithEmailAndPassword(email.toLowerCase(), password)
      .then(() => dispatch(toggleSignupLoading(false)))
      .catch(err => {
        dispatch(failedSignup(err as FirebaseError));
        dispatch(toggleSignupLoading(false));
      });
  }
}

export function logout(): Function{
  return (dispatch: Function) => {
    firebase.auth().signOut()
      .then(() => dispatch(doLogout()))
      .catch(err => dispatch(failedLogout(err as FirebaseError)));
    }
}

export const DO_LOG_OUT = 'DO_LOG_OUT';
function doLogout(): IAction {
  return {
    type: DO_LOG_OUT,
  };
}

export function emailLogin(email: string, password: string): Function {
  return (dispatch: Function) => {
    dispatch(toggleLoginLoading(true));
    dispatch(clearErrors());
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => dispatch(toggleLoginLoading(false)))
      .catch(err => {
        dispatch(failedLogin(err as FirebaseError));
        dispatch(toggleLoginLoading(false));
      });
  }
}

export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export function successLogin(user: User): IFirebaseUserAction { 
  return {
    type: SUCCESS_LOGIN,
    payload: user
  }
}

export function firebaseAuthChanged(user: User): Function {
  return (dispatch: Function) => 
    user && dispatch(successLogin(user))
}
