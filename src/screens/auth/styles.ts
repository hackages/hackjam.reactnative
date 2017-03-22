import { StyleSheet } from 'react-native';
import { ViewStyle, TextStyle } from 'react';

interface IGridStyle {
  column: ViewStyle,
  grid_1: ViewStyle,
  grid_2: ViewStyle,
  grid_3: ViewStyle,
  grid_4: ViewStyle,
  grid_5: ViewStyle,
  grid_6: ViewStyle,
  grid_7: ViewStyle,
  grid_8: ViewStyle,
  grid_9: ViewStyle,
  title_container: ViewStyle,
  title: TextStyle,
  inputs: TextStyle,
  link: TextStyle,
}

const styles = StyleSheet.create<IGridStyle>({
  column: {
    flex: 1,
    flexDirection: 'column',
    padding: 5,
  }, grid_1: {
    flex: 1/10
  }, grid_2: {
    flex: 2/10
  }, grid_3: {
    flex: 3/10
  }, grid_4: {
    flex: 4/10
  }, grid_5: {
    flex: 5/10
  }, grid_6: {
    flex: 6/10
  }, grid_7: {
    flex: 7/10
  }, grid_8: {
    flex: 8/10
  }, grid_9: {
    flex: 9/10
  }, title_container: {
    justifyContent: 'center',
    alignItems: 'center',
  }, title: {
    fontSize: 20,
  }, inputs: {
    height: 40,
  }, link: {
    color: "blue", 
    textDecorationStyle: 'dashed'
  }
});

export default styles;
