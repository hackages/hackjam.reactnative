import React, { Component } from 'react';
import { View, Text, Image, ScrollView, ListView, TextInput, TouchableHighlight } from 'react-native';
import firebase from 'firebase';

import styles from './styles';
import { IPerson } from '../../types/interfaces';
import users from '../../mocks/users';
import UserList from './UserList/index';

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

  navigate = (path: string, params: Object) => {
    this.props.navigation.navigate(path, params);
  }

  render(){
    const {navigation} = this.props;
    const {persons} = this.state;
    return (
      <View>
        <View style={styles.searchFieldContainer}>
          <TextInput
            onChangeText="this.filter"
            placeholder="search"
            style={styles.searchField}/>    
            <UserList
              persons={persons}
              renderRow={(person: IPerson) =>   
                <View>
                  <Text>{person.displayName}</Text>
                  <Image
                    source={{uri: person.photoURL}}/>
                  <TouchableHighlight
                    onPress={() => this.navigate('Profile', {person})}>
                    <Text>  
                      View this profile
                    </Text>
                  </TouchableHighlight>
                </View>}/>
        </View>
      </View>
    );
  }
}

export default MainScreen;
