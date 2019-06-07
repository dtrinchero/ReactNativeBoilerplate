import {StyleSheet} from "react-native";
import metrics from '../../theme/Metrics'
import colors from '../../theme/Colors'

export default StyleSheet.create({
    container: {
        paddingHorizontal: metrics.deviceWidth * 0.1
    },
    form: {
        marginTop: 20
    },
    footer: {
        height: 150,
        justifyContent: 'center'
    },
    createAccountButton: {
        backgroundColor: colors.signUpButtonBackground
    },
    createAccountButtonText: {
        color: colors.signUpButtonText,
        fontWeight: 'bold'
    },
    loginLink: {
        color: colors.loginLink,
        alignSelf: 'center',
        padding: 20
    }
})
