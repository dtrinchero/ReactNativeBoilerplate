import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import styles from './HomeScreenStyle'

import CustomButton from '../../components/CustomButton'

/**
 * Just a centered logout button.
 */
export default class HomeScreen extends Component {
    static propTypes = {
        logout: PropTypes.func
    }

    render () {
        return (
            <View style={styles.container}>
                <CustomButton
                    text={'Logout'}
                    onPress={this.props.logout}
                    buttonStyle={styles.button}
                    textStyle={styles.buttonText}
                />
            </View>
        )
    }
}
