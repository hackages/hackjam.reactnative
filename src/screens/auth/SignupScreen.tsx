import React, { Component } from 'react';
import firebase, { User } from 'firebase';
import { Text, View, Button, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import { ILoginFormAction, ISignupDispatchToProps, ISignupUser, IUiReducer } from '../../types/interfaces';
import styles from './styles';
import { signup, successLogin } from '../../actions/index';

interface IProps {
  navigation: any,
  signup: (Object: ISignupUser) => Function,
  signupSpinner: boolean,
}

interface IState {
  form?: {
    email?: string,
    password?: string,
    confirmPassword?: string,
    displayName?: string,
  }
}

class SignupScreen extends Component<IProps, IState> {

  state = {
    form: {
      email: '',
      validEmail: true,
      password: '',
      confirmPassword: '',
      validPasswords: true,
      displayName: '',
      validDisplayName: true,
    }
  };

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user: User) => {
      if(user && !user.displayName){
        user.updateProfile({
          displayName: this.state.form.displayName,
          photoURL: '',
        });
      }
    });
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
      case 'confirm password':
        this.setState({
          form: {
            ...form,
            confirmPassword: action.value
          },
        } as IState);
        break;

      case 'display name':
        this.setState({
          form: {
            ...form,
            displayName: action.value
          },
        } as IState);
        break;
    }
  };

  doSignup = () => {
    const { form, form: { displayName, email, password, confirmPassword } } = this.state;
    let { form: { validEmail, validPasswords, validDisplayName } } = this.state;
    if(email === ''){
      validEmail = false;
      this.setState({
        form: {
          ...form, validEmail,
        },
      });
    } else {
      validEmail = true;
    }

    if(password.length < 6 || password !== confirmPassword){
      validPasswords = false;
      this.setState({
        form: {
          ...form, validPasswords,
        },
      });
    } else {
      validPasswords = true;
    }

    if(validEmail && validPasswords){
      this.props.signup(this.state.form);
    }
  }

  render(){
    return (
      <View style={styles.column}>
        <View style={[styles.grid_1, styles.title_container]}>
          <Text style={styles.title}>Hackjam react-native</Text>
        </View>
        <View style={styles.grid_9}>
          <Text>What name should we use for you?</Text>
          <TextInput
            onChangeText={(value) => this.handleUpdate({type: 'display name', value})}
            style={styles.inputs}
            placeholder="Display name" />
          <Text>Email address</Text>
          <TextInput
            autoCapitalize="none"
            onChangeText={(value) => this.handleUpdate({type: 'email', value})}
            keyboardType="email-address"
            style={styles.inputs}
            placeholder="email" />

          <Text>Password</Text>
          <TextInput
            autoCapitalize="none"
            onChangeText={(value) => this.handleUpdate({type: 'password', value})}
            secureTextEntry={true}
            style={styles.inputs}
            placeholder="Password" />

          <Text>Confirm your password</Text>
          <TextInput
            autoCapitalize="none"
            onChangeText={(value) => this.handleUpdate({type: 'confirm password', value})}
            secureTextEntry={true}
            style={styles.inputs}
            placeholder="Confirm your password" />

          <Button 
            title="Sign up"
            disabled={this.props.signupSpinner}
            onPress={this.doSignup}/>

          <TouchableHighlight
            onPress={() => {
              this.props.navigation.dispatch({
              type: 'Navigation/RESET',
              actions: [{
                type: 'Navigation/NAVIGATE',
                routeName: 'login',
              }], index: 0
            })}}>
            <Text style={styles.link}>
              I already have an account
            </Text>
          </TouchableHighlight>
          {this.props.signupSpinner && 
            <Text>Setting up your account...</Text>
          }
          {!this.state.form.validEmail && 
            <Text>Email can't be left empty</Text>
          }
          {!this.state.form.validPasswords &&
            <Text>Passwords must match and be longer than 6 characters</Text>
          }
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ui}: {ui: IUiReducer}) => {
  const { signupSpinner } = ui;
  return {
    signupSpinner
  };
}

const mapDispatchToProps = (dispatch: Function): ISignupDispatchToProps => ({
  signup: ({email, password, displayName}: ISignupUser) => dispatch(signup({email, password, displayName})),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
