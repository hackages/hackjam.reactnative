import React, { ReactElement } from 'react';
import firebase, { User } from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers/index';
import Router  from './Routing/index';
import { IEmptyProps } from './types/interfaces';
import config from './config/fireconfig';

const store = createStore(
  reducers, {},
  composeWithDevTools({ realtime: true })(applyMiddleware(thunk)),
);

firebase.initializeApp(config);

const App = (): ReactElement<IEmptyProps> =>
  <Provider store={store}>
    <Router />
  </Provider>;

export default App;
