import {StyleSheet} from "react-native";
import metrics from '../../theme/Metrics'
import colors from '../../theme/Colors'

const imageWidth = metrics.deviceWidth * 0.8

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: metrics.deviceWidth,
        height: metrics.deviceHeight,
        paddingTop: 24,
        backgroundColor: colors.authBackground
    },
    logoImg: {
        flex: 1,
        height: null,
        width: imageWidth,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginVertical: 30
    },
    bottom: {
        backgroundColor: colors.authBackground
    }
})
