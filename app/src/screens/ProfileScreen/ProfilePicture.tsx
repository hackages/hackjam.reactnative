import React, { ReactElement } from 'react';
import { Image } from 'react-native';

interface IProps {
  source: string,
};

const Profile = ({source}: IProps): ReactElement<IProps> => 
  <Image
    style={{width: 50, height: 50}}
    source={{uri: source}} />;

export default Profile;