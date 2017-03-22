import React, { ReactElement } from 'react';
import { ListView, View } from 'react-native';
import { IPerson } from '../../../types/interfaces'; 
import styles from './styles';

interface IProps {
  persons: IPerson[],
  renderRow: (person: IPerson) => ReactElement<IPerson>,
}

let c = 0;

const UserList = ({persons, renderRow}: IProps): ReactElement<IProps> => {
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });
  const dataSource = ds.cloneWithRows(persons);
  return (
    <ListView
      enableEmptySections
      dataSource={dataSource}
      renderRow={renderRow}
      renderSeparator={() => <View key={c++} style={styles.separator} />}/>
  );
};

export default UserList;
