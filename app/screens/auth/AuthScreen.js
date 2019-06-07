import React, { Component } from 'react'

import { KeyboardAvoidingView, LayoutAnimation, Platform, UIManager, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native-animatable'
import styles from './AuthScreenStyle'
import imgLogo from '../../images/logo.png'

import LandingScreen from './LandingScreen'
import SignInScreen from './SignInScreen'
import SignUpScreen from './SignUpScreen'


if (Platform.OS === 'android') UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export default class AuthScreen extends Component {

    static propTypes = {
        userHasLoggedSuccesfully: PropTypes.func.isRequired
    }

    state = {
        checkedSignIn: false,
        isLoading: false,
        visibleForm: null
    }

    componentWillUpdate (nextProps, nextState) {
        // If the user has logged/signed up succesfully start the hide animation
        if (!this.state.checkedSignIn && nextState.checkedSignIn) {
            this.hideAuthScreen()
        }
    }

    hideAuthScreen = async () => {
        // 1. Slide out the form container
        await this.setVisibleForm(null)
        // 2. Fade out the logo
        await this.logoImgRef.fadeOut(800)
        // 3. Tell the container (app.js) that the animation has completed
        this.props.userHasLoggedSuccesfully()
    }

    setVisibleForm = async (visibleForm) => {
        // 1. Hide the current form (if any)
        if (this.state.visibleForm && this.formRef && this.formRef.hideForm) {
            await this.formRef.hideForm()
        }
        // 2. Configure a spring animation for the next step
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
        // 3. Set the new visible form
        this.setState({ visibleForm })
    }

    /**
     * Two login function that waits 1000 ms and then authenticates the user succesfully.
     * In your real app they should be replaced with an API call to you backend.
     */
    simulateLogin = (username, password) => {
        this.setState({ isLoading: true })
        setTimeout(() => this.setState({ checkedSignIn: true, isLoading: false }), 1000)
    }

    simulateSignup = (username, password, fullName) => {
        this.setState({ isLoading: true })
        setTimeout(() => this.setState({ checkedSignIn: true, isLoading: false }), 1000)
    }

    render () {
        const { checkedSignIn, isLoading, visibleForm } = this.state
        // The following style is responsible of the "bounce-up from bottom" animation of the form
        const formStyle = (!visibleForm) ? { height: 0 } : { marginTop: 40 }
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Image
                    animation={'bounceIn'}
                    duration={1200}
                    delay={200}
                    ref={(ref) => this.logoImgRef = ref}
                    style={styles.logoImg}
                    source={imgLogo}
                />
                {(!visibleForm && !checkedSignIn) && (
                    <LandingScreen
                        onCreateAccountPress={() => this.setVisibleForm('SIGNUP')}
                        onSignInPress={() => this.setVisibleForm('LOGIN')}
                    />
                )}
                <KeyboardAvoidingView
                    keyboardVerticalOffset={-100}
                    behavior={'padding'}
                    style={[formStyle, styles.bottom]}
                >
                    {(visibleForm === 'SIGNUP') && (
                        <SignUpScreen
                            ref={(ref) => this.formRef = ref}
                            onLoginLinkPress={() => this.setVisibleForm('LOGIN')}
                            onSignupPress={this.simulateSignup}
                            isLoading={isLoading}
                        />
                    )}
                    {(visibleForm === 'LOGIN') && (
                        <SignInScreen
                            ref={(ref) => this.formRef = ref}
                            onSignupLinkPress={() => this.setVisibleForm('SIGNUP')}
                            onLoginPress={this.simulateLogin}
                            isLoading={isLoading}
                        />
                    )}
                </KeyboardAvoidingView>
            </View>
        )
    }
}
