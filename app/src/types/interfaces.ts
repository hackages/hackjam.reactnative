import React from 'react';

export interface IAppStyle {
  container: React.ViewStyle,
};

export interface IListStyles{
  separator: React.ViewStyle,
};

export interface IPerson {
  uid: number,
  displayName: string,
  photoURL: string,
};

export interface IEmptyProps { }
