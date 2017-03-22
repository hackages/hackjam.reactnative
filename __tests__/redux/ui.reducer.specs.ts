import uiReducer from '../../src/reducers/ui';
import * as types from '../../src/actions/index';

const initialState = {
  loginSpinner: false,
  signupSpinner: false,
};

describe('UI Reducer', () => {
  describe('Login spinner', () => {
    it('Should use the value we pass as a payload', () => {
      const action = {
        type: types.TOGGLE_LOGIN_LOADING,
        payload: true,
      };
      expect(uiReducer(initialState, action)).toEqual({...initialState, loginSpinner: true});
    });
  });

  describe('Signup spinner', () => {
    it('Should use the value we pass as a payload', () => {
      const action = {
        type: types.TOGGLE_SIGNUP_LOADING,
        payload: true,
      };
      expect(uiReducer(initialState, action)).toEqual({...initialState, signupSpinner: true});
    });
  });
});
