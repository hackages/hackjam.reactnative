import React, { Component } from 'react';
import firebase, { User } from 'firebase';
import { Text, View, Button, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import { ILoginFormAction, IAuthReducer, ISigninUser, IUiReducer } from '../../types/interfaces';
import styles from './styles';
import { firebaseAuthChanged, emailLogin, clearErrors } from '../../actions/index';

interface IProps {
  navigation: any,
  authChanged: (user: User) => Function,
  loggedIn: boolean,
  signIn: (account: ISigninUser) => Function,
  loginSpinner: boolean,
  loginErr: string,
  clearErrors: () => Function,
}

interface IState {
  form?: {
    email?: string,
    password?: string,
    confirmPassword?: string,
  }
}

class LoginScreen extends Component<IProps, IState> {

  state = {
    form: {
      email: '',
      password: '',
    }
  };

  componentWillMount(){
    firebase.auth().onAuthStateChanged(this.props.authChanged);
  }

  componentWillReceiveProps(nextProps: IProps){
    nextProps.loggedIn && nextProps.navigation.dispatch({
      type: 'Navigation/RESET',
      actions: [{
        type: 'Navigation/NAVIGATE',
        routeName: 'main',
      }], index: 0
    });

    if(nextProps.loginErr){
      alert(nextProps.loginErr);
      this.props.clearErrors();
    }
  }

  handleUpdate = (action: ILoginFormAction): void => {
    const { form } = this.state;
    switch(action.type){
      case 'email':
        this.setState({
          form: {
            ...form,
            email: action.value
          },
        } as IState);
        break;
      case 'password':
        this.setState({
          form: {
            ...form,
            password: action.value
          },
        } as IState);
        break;
    }
  };

  doLogin = () => {
    this.props.signIn(this.state.form);
  };

  render(){
    return (
      <View style={styles.column}>
        <View style={[styles.grid_1, styles.title_container]}>
          <Text style={styles.title}>Hackjam react-native</Text>
        </View>
        <View style={styles.grid_9}>
          <Text>Email address</Text>
          <TextInput
            autoCapitalize="none"
            onChangeText={(value) => this.handleUpdate({type: 'email', value})}
            keyboardType="email-address"
            style={styles.inputs}
            placeholder="email" />

          <Text>Password</Text>
          <TextInput
            onChangeText={(value) => this.handleUpdate({type: 'password', value})}
            secureTextEntry={true}
            style={styles.inputs}
            placeholder="Password" />

          <Button 
            title="Sign in"
            disabled={this.props.loginSpinner}
            onPress={this.doLogin}/>

          <TouchableHighlight
            onPress={() => this.props.navigation.dispatch({
              type: 'Navigation/NAVIGATE',
              routeName: 'signup',
              actions: [{
                type: 'Reset',
                routeName: 'signup',
                index: 0
              }]
            })}>
            <Text style={styles.link}>
              I dont have an account yet
            </Text>
          </TouchableHighlight>
          {this.props.loginSpinner && 
             <Text>Logging you in ...</Text>
          }
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({auth, ui}: {auth: IAuthReducer, ui: IUiReducer}) => {
  const { loggedIn, loginErr } = auth;
  const { loginSpinner } = ui;
  return {
    loggedIn,
    loginErr,
    loginSpinner
  };
};

const mapDispatchToProps = (dispatch: Function) => ({
  authChanged: (user: User) => dispatch(firebaseAuthChanged(user)),
  signIn: ({email, password}: ISigninUser) => dispatch(emailLogin(email, password)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
