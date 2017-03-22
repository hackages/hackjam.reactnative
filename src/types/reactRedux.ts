import { IAction, ISignupUser } from './interfaces';
export interface IEmptyProps { }

export interface IEmptyState { }

export interface ISignupDispatchToProps {
  signup: ({}: ISignupUser) => (Function | IAction)
}
