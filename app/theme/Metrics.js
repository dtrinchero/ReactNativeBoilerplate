import { Dimensions, Platform } from 'react-native'

const isAndroid = Platform.OS === 'android'
const { height, width } = Dimensions.get('window')

export default {
    androidStatusBar: 24,
    deviceHeight: isAndroid ? height - 24 : height,
    deviceWidth: width
}
