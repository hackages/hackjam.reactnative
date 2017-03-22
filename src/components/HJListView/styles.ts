import { StyleSheet } from 'react-native';

import { IListStyles} from '../../types/interfaces';

const styles = StyleSheet.create<IListStyles>({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

export default styles;
