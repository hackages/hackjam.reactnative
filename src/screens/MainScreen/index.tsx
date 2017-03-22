import React, { Component } from 'react';
import { View, TextInput, Button, Dimensions } from 'react-native';
import firebase, { User } from 'firebase';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';

import { updateRSVPList, filterRSVPList, addSelfToList } from '../../actions/index';
import { HJListView } from '../../components/index';
import ListItem from './ListItem';
import styles from './styles';
import { IPerson, IFirebaseReducer, IEmptyState, IAuthReducer } from '../../types/interfaces';

interface IProps {
  navigation: any,
  updateUsersList: (users: IPerson[]) => Function,
  loggedIn: boolean,
  user: User,
}

interface IState {
  persons: IPerson[],
  isInTheList: boolean,
}

class MainScreen extends Component<IProps, IEmptyState> {

  state = {
    persons: [] as IPerson[],
    isInTheList: false,
  };

  componentDidMount(){
    firebase.database().ref('hackjam-expo/users').on('value', (snap) => {
      // You should fetch the user list from firebase
      /*
        {
          "users": {
              "R5WJSlqbhJQg1NuaZoaJZ00Ptc32": {
                  "displayName": "Antonio@hackages",
                  "uid": "R5WJSlqbhJQg1NuaZoaJZ00Ptc32"
              },
              "R5WJSlqbhJQg1NuaZoaJZ00Ptc33: {
                  "displayName": "Antonio2@hackages",
                  "uid": "R5WJSlqbhJQg1NuaZoaJZ00Ptc32"
              }
          }
}      
      */
      // Transform it in array
      /**
        [
          {
            "displayName": "Antonio@hackages",
             "uid": "R5WJSlqbhJQg1NuaZoaJZ00Ptc32"
          },
          {
            "displayName": "Antonio2@hackages",
             "uid": "R5WJSlqbhJQg1NuaZoaJZ00Ptc32"
          }
        ]
      **/
      // Check if you are in the list or not
      // And save it the list and if you are in the list
      const list = snap.val() || [];
      const persons = Object.keys(list).map(el => list[el]);
      const isInTheList = !!persons.find(person => person.uid === this.props.user.uid);
      this.setState({persons, isInTheList});
    });
  }

  addRemoveFromList = () => {
    if(!this.state.isInTheList){
      this.addToList();
    } else {
      this.removeFromList();
    }
  }

  addToList = () => {
    // Add yourself in the list 
    // {
    //    displayName,
    //    uid,
    // }
    // firebase.database().ref(`hackjam-expo/users/yourUserUID`)
    // hint: this.props
    // https://firebase.google.com/docs/database/web/read-and-write

  }

  removeFromList = () => {
    // firebase.database().ref(`hackjam-expo/users/yourUserUID`)
    // https://stackoverflow.com/questions/26537720/how-to-delete-remove-nodes-on-firebase
    // 
  }

  componentWillReceiveProps(nextProps: IProps){
    !nextProps.loggedIn && nextProps.navigation.dispatch({
      type: 'Navigation/RESET',
      actions: [{
        type: 'Navigation/NAVIGATE',
        routeName: 'login',
      }], index: 0
    });
  }

  filter = (searchTerm: string): void => {
    // Filter this.state.persons according to the searchTerm
  }

  componentWillUnmount(){
    firebase.database().ref('hackjam-expo/users').off();
  }

  render(){
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <View>
          <TextInput
            onChangeText="this.filter"
            placeholder="search"
            style=styles.searchField/>
          <HJListView
            navigation=navigation
            persons={this.state.persons}
            renderRow={
              (person) => {
                // Return ListItem component with the props:
                // navigation={this.props.navigation}  and person={person}
               }
            } />
        </View>
        <ActionButton 
          active=this.state.isInTheList
          onPress=this.addRemoveFromList>
          <ActionButton/>
        </ActionButton>
      </View>
    );
  }
}

// DONT GO BELOW THIS LINE
const mapStateToProps = ({auth: {loggedIn, user}}: {auth: IAuthReducer}) => ({
  loggedIn,
  user,
});

export default connect(mapStateToProps, null)(MainScreen);
