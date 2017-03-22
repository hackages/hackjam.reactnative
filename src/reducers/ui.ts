import { IAction, IBooleanAction } from '../types/interfaces';

const initialState = {
  loginSpinner: false,
  signupSpinner: false,
};

const reducer = {
  TOGGLE_LOGIN_LOADING: (state = initialState, action: IBooleanAction) => 
    ({...state, loginSpinner: action.payload}),

  TOGGLE_SIGNUP_LOADING: (state = initialState, action: IBooleanAction) =>
    ({...state, signupSpinner: action.payload}),
} as any;

const ui = (state = initialState, action: IAction) => {
  const handler = reducer[action.type];
  return handler ? handler(state, action) : state;
}

export default ui;
