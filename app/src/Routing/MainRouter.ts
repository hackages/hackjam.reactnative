import { StackNavigator } from 'react-navigation';

import { MainScreen, ProfileScreen } from '../screens/index';

const MainRouter = StackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      title: 'Welcome'
    }
  }, Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: ({state}: any) => `${state.params.person.displayName}'s Profil`
    }
  }
});

export default MainRouter;
