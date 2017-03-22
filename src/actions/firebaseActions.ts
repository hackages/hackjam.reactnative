import firebase, { User } from 'firebase';
import { IGetRSVPAction, IPerson, IFilterRSVPAction } from '../types/interfaces';

export const UPDATE_RSVP_LIST: string = "UPDATE_RSVP_LIST";
export function updateRSVPList(payload: IPerson[]): IGetRSVPAction {
  return {
    type: UPDATE_RSVP_LIST,
    payload,
  };
}

export const FILTER_RSVP_LIST: string = "FILTER_RSVP_LIST"
export function filterRSVPList(payload: string): IFilterRSVPAction {
  return {
    type: FILTER_RSVP_LIST,
    payload,
  };
}

export function addSelfToList(user: User) {
  return (dispatch: Function) => {
    const { uid, displayName, photoURL } = user;
    firebase.database().ref(`/hackjam-2/users/${uid}/`).set({
      displayName, uid, photoURL
    });
  }
}
