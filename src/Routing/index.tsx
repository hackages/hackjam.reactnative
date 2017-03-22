import React from 'react';
import { StackNavigator, NavigationActions } from 'react-navigation';

import { MainScreen, ProfileScreen, LoginScreen, SignupScreen } from '../screens/index';
import { LogoutButton } from '../components/index';

const indexRouter = StackNavigator({
  login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Log in',
    },
  }, signup: {
    screen: SignupScreen,
    navigationOptions: {
      title: 'Sign up',
    },
  }, main: {
    screen: MainScreen,
    navigationOptions: {
      title: 'Welcome',
      header: {
        right: <LogoutButton />
      }
    },
  }, profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: ({state}: any) => `${state.params.person.displayName}'s Profil`
    },
  },
});

export default indexRouter;
