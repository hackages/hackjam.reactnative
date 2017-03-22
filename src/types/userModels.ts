export interface IPerson {
  uid: number,
  displayName: string,
  photoURL?: string,
}

export interface ISignupUser {
  password: string,
  displayName: string,
  email: string,
}

export interface ISigninUser {
  email: string,
  password: string,
}
