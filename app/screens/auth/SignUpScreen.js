import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native-animatable'
import styles from './SignUpScreenStyle'

import CustomButton from '../../components/CustomButton'
import CustomTextInput from '../../components/CustomTextInput'

export default class SignupForm extends Component {
    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        onSignupPress: PropTypes.func.isRequired,
        onLoginLinkPress: PropTypes.func.isRequired
    }

    state = {
        email: '',
        password: '',
        fullName: ''
    }

    hideForm = async () => {
        if (this.buttonRef && this.formRef && this.linkRef) {
            await Promise.all([
                this.buttonRef.zoomOut(200),
                this.formRef.fadeOut(300),
                this.linkRef.fadeOut(300)
            ])
        }
    }

    render () {
        const { email, password, fullName } = this.state
        const { isLoading, onLoginLinkPress, onSignupPress } = this.props
        const isValid = email !== '' && password !== '' && fullName !== ''
        return (
            <View style={styles.container}>
                <View style={styles.form} ref={(ref) => this.formRef = ref}>
                    <CustomTextInput
                        ref={(ref) => this.mobileInputRef = ref}
                        placeholder={'Full name'}
                        editable={!isLoading}
                        returnKeyType={'next'}
                        blurOnSubmit={false}
                        withRef={true}
                        onSubmitEditing={() => this.emailInputRef.focus()}
                        onChangeText={(value) => this.setState({ fullName: value })}
                        isEnabled={!isLoading}
                    />
                    <CustomTextInput
                        ref={(ref) => this.emailInputRef = ref}
                        placeholder={'Email'}
                        keyboardType={'email-address'}
                        editable={!isLoading}
                        returnKeyType={'next'}
                        blurOnSubmit={false}
                        withRef={true}
                        onSubmitEditing={() => this.passwordInputRef.focus()}
                        onChangeText={(value) => this.setState({ email: value })}
                        isEnabled={!isLoading}
                    />
                    <CustomTextInput
                        ref={(ref) => this.passwordInputRef = ref}
                        placeholder={'Password'}
                        editable={!isLoading}
                        returnKeyType={'done'}
                        secureTextEntry={true}
                        withRef={true}
                        onChangeText={(value) => this.setState({ password: value })}
                        isEnabled={!isLoading}
                    />
                </View>
                <View style={styles.footer}>
                    <View ref={(ref) => this.buttonRef = ref} animation={'bounceIn'} duration={600} delay={400}>
                        <CustomButton
                            onPress={() => onSignupPress(email, password, fullName)}
                            isEnabled={isValid}
                            isLoading={isLoading}
                            buttonStyle={styles.createAccountButton}
                            textStyle={styles.createAccountButtonText}
                            text={'Create Account'}
                        />
                    </View>
                    <Text
                        ref={(ref) => this.linkRef = ref}
                        style={styles.loginLink}
                        onPress={onLoginLinkPress}
                        animation={'fadeIn'}
                        duration={600}
                        delay={400}
                    >
                        {'Already have an account?'}
                    </Text>
                </View>
            </View>
        )
    }
}
