import fbReducer from "../../src/reducers/firebaseReducer";
import * as types from "../../src/actions/index";

const initialState = {
  users: [] as IPerson[],
  filteredList: [] as IPerson[],
};

const mockUsers = [{uid: '431FD41RFDS', displayName: 'Antonio'}, {uid: 'zz322$$$1RFDS', displayName: 'Davy'}];

describe('Testing firebase', () => {

  it('Should return the initial state', () => {
    expect(fbReducer(undefined, {})).toEqual(initialState);
  });

  it('Should update the RSVP list', () => {
    const action = {
      type: types.UPDATE_RSVP_LIST,
      payload: mockUsers,
    };
    const expectedState = {...initialState, users: action.payload};
    const state = fbReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it('Should be able to filter users', () => {
    const action = {
      type: "FILTER_RSVP_LIST",
      payload: 'ant',
    };
    const expectedState = {...initialState, users: mockUsers, filteredList: [mockUsers[0]]};
    const state = fbReducer({...initialState, users: mockUsers}, action);
    expect(state).toEqual(expectedState);
  });
});
