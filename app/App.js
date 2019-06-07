import React, { Component } from 'react';

import AuthScreen from './screens/auth/AuthScreen';
import HomeScreen from './screens/home/HomeScreen';

export class App extends Component {

    state = {
        isUserLoggedIn: false
    }

    render () {
        if (this.state.isUserLoggedIn) {
            return (
                <HomeScreen
                    logout={() => this.setState({ isUserLoggedIn: false })}
                />
            )
        } else {
            return (
                <AuthScreen
                    userHasLoggedSuccesfully={() => this.setState({ isUserLoggedIn: true })}
                />
            )
        }
    }
}

export default App





