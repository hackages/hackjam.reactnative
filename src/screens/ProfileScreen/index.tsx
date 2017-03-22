import React, { ReactElement } from 'react';
import { View } from 'react-native';

import { IPerson } from '../../types/interfaces';
import ProfilePicture from './ProfilePicture';
import Name from './Name';
import UIDButton from './UIDButton';
import styles from './styles';

interface IProps {
  navigation: any,
}

const Profile = ({navigation}: IProps): ReactElement<IProps> => {
  const {person}: {person: IPerson} = navigation.state.params;
  return (
      <View style={styles.container}>
        <ProfilePicture
          source={person.photoURL}/>
        <Name
          name={person.displayName}/>
        <UIDButton
          uid={person.uid}/>
      </View>
  );
};

export default Profile;
