import authReducer from '../../src/reducers/auth';
import * as types from '../../src/actions/authActions';
import { User } from 'firebase';

const initialState = {
  loggedIn: false,
  user: {} as User,
  loginErr: '',
  signupErr: '',
  logoutErr: '',
};

describe('testing auth reducer', () => {
  describe('core', () => {
    it('Should return initial state', () => {
      expect(authReducer(undefined, {})).toEqual(initialState);
    });
  });

  describe('auth flow', () => {
      it('Should be able to log in', () => {
      const user = {name: 'Antonio', uid: 'afeFEAZFE342-', photoURL: null};
      const expectedState = {...initialState, user, loggedIn: true};
      const action = {
        type: types.SUCCESS_LOGIN,
        payload: user
      };
      expect(authReducer(initialState, action)).toEqual(expectedState);
    });

    it('Should be able to log out', () => {
      const user = {name: 'Antonio', uid: 'afeFEAZFE342-', photoURL: null};
      const action = {
        type: types.DO_LOG_OUT
      };
      const state = {...initialState, loggedIn: true, user};
      expect(authReducer(state, action)).toEqual(initialState);
    })
  });

  describe('Should handle errors', () => {
    it(`Should handle ${types.FAILED_LOGIN}`, () => {
      const loginErr = 'ERR';
      const expectedState = {...initialState, loginErr};
      const action = {
        type: types.FAILED_LOGIN,
        payload: loginErr,
      };
      expect(authReducer(initialState, action)).toEqual(expectedState);
    });

    it(`Should handle ${types.FAILED_LOGOUT}`, () => {
      const logoutErr = 'ERR';
      const expectedState = {...initialState, logoutErr};
      const action = {
        type: types.FAILED_LOGOUT,
        payload: logoutErr,
      };
      expect(authReducer(initialState, action)).toEqual(expectedState);
    });

    it(`Should handle ${types.FAILED_SIGNUP}`, () => {
      const signupErr = 'ERR';
      const expectedState = {...initialState, signupErr};
      const action = {
        type: types.FAILED_SIGNUP,
        payload: signupErr,
      };
      expect(authReducer(initialState, action)).toEqual(expectedState);

    });
    
    it('Should clear errors', () => {
      const state = {...initialState,
        logoutErr: 'ERR',
        signupErr: 'ERR',
        loginErr: 'ERR',
      };
      const action = {
        type: types.CLEAR_ERRORS
      };
      expect(authReducer(state, action)).toEqual(initialState);
    });
  });
});
