import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screen/SignIn';

const AuthStack = createStackNavigator();

const navOptionHandler = () => ({
    headerShown: false
});

const AuthRoutes = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={SignIn} options={navOptionHandler} />
        </AuthStack.Navigator>
    );
};

export default AuthRoutes;