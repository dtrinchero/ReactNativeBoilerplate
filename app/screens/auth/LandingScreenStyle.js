import {StyleSheet} from "react-native";
import metrics from '../../theme/Metrics'
import colors from '../../theme/Colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: metrics.deviceWidth * 0.1,
        justifyContent: 'flex-start'
    },
    createAccountButton: {
        backgroundColor: colors.createAccountButtonBackground
    },
    createAccountButtonText: {
        color: colors.createAccountButtonText
    },
    separatorContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 20
    },
    separatorLine: {
        flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
        height: StyleSheet.hairlineWidth,
        borderColor: colors.separator
    },
    separatorOr: {
        color: colors.separator,
        marginHorizontal: 8
    },
    signInButton: {
        backgroundColor: colors.signInButtonBackground
    },
    signInButtonText: {
        color: colors.signInButtonText
    }
})
