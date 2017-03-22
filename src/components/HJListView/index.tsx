import React, { ReactElement } from 'react';
import { ListView } from 'react-native';
import uuidV4 from 'uuid/v4';

import { IPerson } from '../../types/interfaces';

import ListItem from './ListItem';
import ListSeparator from './ListSeparator';

interface IProps {
  persons: IPerson[],
  navigation: any,
  renderRow: (person: IPerson) => ReactElement<IPerson>
}

interface IState {
  dataSource: any,
};

const HJListView = ({persons, navigation, renderRow}: IProps): ReactElement<IProps> =>  {
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });
  const dataSource = ds.cloneWithRows(persons);
  return(
    <ListView
      enableEmptySections
      dataSource={dataSource}
      renderRow={renderRow}
      renderSeparator={() => <ListSeparator key={uuidV4()}/>}/>
    );
};

export default HJListView;
