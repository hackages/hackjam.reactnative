import { StyleSheet, ViewStyle } from 'react-native';

interface IStyle {
  separator: ViewStyle,
};

const styles = StyleSheet.create<IStyle>({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

export default styles;
