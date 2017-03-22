import { IPerson, IFirebaseReducer, IGetRSVPAction, IFilterRSVPAction } from '../../src/types/interfaces';

const initialState = {
  users: [] as IPerson[],
  filteredList: [] as IPerson[],
};

const reducer = {
  UPDATE_RSVP_LIST: (state = initialState, action: IGetRSVPAction): IFirebaseReducer => {
    const users = Object.keys(action.payload).map((key: string) => action.payload[key]);
    return {...initialState, users, filteredList: users}
  },

  FILTER_RSVP_LIST: (state = initialState, action: IFilterRSVPAction): IFirebaseReducer => {
    if(action.payload === ''){
      return {...state, filteredList: state.users};
    }
    const filteredList: IPerson[] = state.users
      .filter(({displayName}) => displayName.toLowerCase()
        .match(action.payload.toLowerCase()));

    return {...state, filteredList};
  },

  getInitialState: (state: IFirebaseReducer): IFirebaseReducer => state,
} as any;

const firebaseReducer = (state = initialState, action: IGetRSVPAction) => {
  const handler = reducer[action.type] || reducer.getInitialState;
  return handler(state, action);
};

export default firebaseReducer;
