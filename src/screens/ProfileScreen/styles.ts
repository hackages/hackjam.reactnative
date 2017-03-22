import { StyleSheet } from 'react-native';
import { ViewStyle, ImageStyle, TextStyle } from 'react-native';

interface IStyle {
    container: ViewStyle,
    photo: ImageStyle,
    name: TextStyle,
}

const styles = StyleSheet.create<IStyle>({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    photo: {
        width: 50,
        height: 50,
    }, name: {
        fontSize: 25,
    },
});

export default styles;
