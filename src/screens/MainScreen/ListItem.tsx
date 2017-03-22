import React from 'react';
import { Text, Image, View, TouchableHighlight } from 'react-native';
import firebase from 'firebase';

import { IPerson } from '../../types/interfaces';

interface IProps {
  person: IPerson,
  navigation: any,
};

const ListItem = ({person, navigation}: IProps): React.ReactElement<{}> => 
  <View>
    <Text>{person.displayName}</Text>
    <Image
      style={{width: 50, height: 50}}
      source={{uri: person.photoURL}}/>
    <TouchableHighlight
      onPress={() => navigation.navigate('profile', {person})}>
      <Text>
        View this profile
      </Text>
    </TouchableHighlight>
  </View>;

export default ListItem;
