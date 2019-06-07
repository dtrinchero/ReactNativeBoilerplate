import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Text, View } from 'react-native-animatable'

import CustomButton from '../../components/CustomButton'
import styles from './LandingScreenStyle'

export default class LandingScreen extends Component {
    static propTypes = {
        onCreateAccountPress: PropTypes.func.isRequired,
        onSignInPress: PropTypes.func.isRequired
    }

    render () {
        return (
            <View style={styles.container}>
                <View animation={'zoomIn'} delay={600} duration={400}>
                    <CustomButton
                        text={'Create Account'}
                        onPress={this.props.onCreateAccountPress}
                        buttonStyle={styles.createAccountButton}
                        textStyle={styles.createAccountButtonText}
                    />
                </View>
                <View style={styles.separatorContainer} animation={'zoomIn'} delay={700} duration={400}>
                    <View style={styles.separatorLine} />
                    <Text style={styles.separatorOr}>{'Or'}</Text>
                    <View style={styles.separatorLine} />
                </View>
                <View animation={'zoomIn'} delay={800} duration={400}>
                    <CustomButton
                        text={'Sign In'}
                        onPress={this.props.onSignInPress}
                        buttonStyle={styles.signInButton}
                        textStyle={styles.signInButtonText}
                    />
                </View>
            </View>
        )
    }
}
