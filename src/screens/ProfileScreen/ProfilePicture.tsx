import React, { ReactElement } from 'react';
import { Image } from 'react-native';

import styles from './styles';

interface IProps {
  source: string,
}

const Profile = ({source}: IProps): ReactElement<IProps> => 
  <Image
    style={styles.photo}
    source={{uri: source}} />;

export default Profile;
