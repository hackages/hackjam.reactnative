import React, { ReactElement } from 'react';
import { Text } from 'react-native';

interface IProps {
  name: string,
};

const Profile = ({name}: IProps): ReactElement<IProps> => 
  <Text>
    {name}
  </Text>;

export default Profile;