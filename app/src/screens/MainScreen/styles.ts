import { ViewStyle, TextStyle } from 'react';
import { StyleSheet } from 'react-native';

interface IStyle {
  container: ViewStyle,
  searchField: TextStyle,
  searchFieldContainer: ViewStyle,
  listViewContainer: ViewStyle,
  separator: ViewStyle,
}

const styles = StyleSheet.create<IStyle>({
  container: {
    flex: 1
  }, searchFieldContainer: {

  }, searchField: {
    height: 40, borderColor: 'gray', borderWidth: 1
  }, listViewContainer: {
    marginTop: 10,
  }, separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

export default styles;
