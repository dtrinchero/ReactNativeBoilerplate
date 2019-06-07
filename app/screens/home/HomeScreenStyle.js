import {StyleSheet} from "react-native";
import colors from '../../theme/Colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: colors.logoutButtonBackground,
        margin: 20
    },
    buttonText: {
        color: colors.logoutButtonText,
        fontWeight: 'bold'
    }
})
