import React, { ReactElement, ViewStyle, ImageStyle } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

import { IPerson } from '../../types/interfaces';

interface IProps {
  navigation: any,
};

interface IStyle {
  container: ViewStyle,
  picture: ImageStyle,
}

const styles = StyleSheet.create<IStyle>({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center"
  }, picture: {
    width: 50, 
    height: 50
  }
})

const Profile = ({navigation}: IProps): ReactElement<IProps> => {
  const {person} = navigation.state.params;
  return (
    <View style={styles.container}>
      <Image
        style={styles.picture}
        source={{uri: person.photoURL}} />
       <Text>
        {person.displayName}
      </Text>
      <Button
        onPress={() => alert(`This user's uid is ${person.uid}`)}
        title="See uid" />
    </View>
  );
}

export default Profile;
