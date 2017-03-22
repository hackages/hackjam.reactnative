import React, { Component } from 'react';
import { View, Text, Image, ScrollView, ListView, TextInput, TouchableHighlight } from 'react-native';
import firebase from 'firebase';

import styles from './styles';
import { IPerson } from '../../types/interfaces';
import users from '../../mocks/users';

interface IProps {
  navigation: any,
}

interface IState {
  persons?: IPerson[],
  filteredList?: IPerson[],
}

class MainScreen extends Component<IProps, IState> {

  state = {
    persons: users,
  };

  filter = (searchTerm: string): void => {
  }

  render(){
    const {navigation} = this.props;
    const {persons} = this.state;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    const dataSource = ds.cloneWithRows(persons);
    return (
      <View>
        <View style={styles.searchFieldContainer}>
          <TextInput
            onChangeText="this.filter"
            placeholder="search"
            style={styles.searchField}/>    
            <ListView
              enableEmptySections
              dataSource={dataSource}
              renderRow={(person: IPerson) =>   
                <View>
                  <Text>{person.displayName}</Text>
                  <Image
                    source={{uri: person.photoURL}}/>
                  <TouchableHighlight
                    onPress={() => navigation.navigate('Profile', {person})}>
                    <Text>
                      View this profile
                    </Text>
                  </TouchableHighlight>
                </View>}
              renderSeparator={() => <View style={styles.separator} />}/>
        </View>
      </View>
    );
  }
}

export default MainScreen;
