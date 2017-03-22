import React, { ReactElement } from 'react';
import { Text } from 'react-native';

import styles from './styles';

interface IProps {
  name: string,
}

const Profile = ({name}: IProps): ReactElement<IProps> => 
  <Text style={styles.name}>
    {name}
  </Text>;

export default Profile;
