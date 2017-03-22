import React, { ReactElement } from 'react';
import { View } from 'react-native';

import MainRouter  from './Routing/MainRouter';
import { IEmptyProps } from './types/interfaces';

const App = (): ReactElement<IEmptyProps> => 
    <MainRouter />;

export default App;
