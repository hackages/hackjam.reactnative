import { IAction, IAuthReducer, IFirebaseUserAction, IFirebaseError } from '../types/interfaces';
import { User } from 'firebase';

const initialState = {
  loggedIn: false,
  user: {} as User,
  loginErr: '',
  signupErr: '',
  logoutErr: '',
};

const reducer = {
  FAILED_LOGIN: (state: IAuthReducer, action: IFirebaseError): IAuthReducer => 
    ({...state, loginErr: action.payload }),

  FAILED_LOGOUT: (state: IAuthReducer, action: IFirebaseError): IAuthReducer =>
    ({...state, logoutErr: action.payload }),

  FAILED_SIGNUP: (state: IAuthReducer, action: IFirebaseError): IAuthReducer =>
    ({...state, signupErr: action.payload }),

  CLEAR_ERRORS: (state: IAuthReducer): IAuthReducer => 
    ({...state, signupErr: '', loginErr: '', logoutErr: '' }),

  DO_LOG_OUT: (): IAuthReducer => initialState,

  SUCCESS_LOGIN: (state: IAuthReducer, action: IFirebaseUserAction): IAuthReducer => 
    ({...state, loggedIn: true, user: action.payload}),

  INITIAL_STATE: (state: IAuthReducer): IAuthReducer => state
} as any;


const auth = (state: IAuthReducer = initialState, action: IAction) => {
  const handler: Function = reducer[action.type] || reducer.INITIAL_STATE;
  return handler(state, action);
};

export default auth;
