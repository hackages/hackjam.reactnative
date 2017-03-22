import React, { ReactElement } from 'react';
import { Button } from 'react-native';

interface IProps {
  uid: number
}

const UIDButton = ({uid}: IProps): ReactElement<IProps> => 
  <Button
    onPress={() => alert(`This user's uid is ${uid}`)}
    title="See uid" />;

export default UIDButton;
