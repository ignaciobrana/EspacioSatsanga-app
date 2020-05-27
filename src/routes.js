import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef, isMountedRef } from './navigation/RootNavigation';
import LoginScreen from './auth/login';
import NewStudentScreen from './screen/NewStudent';

const StackApp = createStackNavigator();
const StackHome = createStackNavigator();

const navOptionHandler = () => ({
    headerShown: false
});

function HomeStack() {
    return (
        <StackHome.Navigator initialRouteName="NewStudent">
            <StackHome.Screen name="NewStudent" component={NewStudent_screen} options={navOptionHandler}></StackHome.Screen>
        </StackHome.Navigator>
    );
}

function Login_screen({ navigation }) {
    return (
        <LoginScreen navigation={navigation} />
    );
}

function NewStudent_screen({ navigation }) {
    return (
        <NewStudentScreen navigation={navigation} />
    );
}

function Routes() {
    React.useEffect(() => {
        isMountedRef.current = true;
        return () => (isMountedRef.current = false);
    }, []);

    return (
        <NavigationContainer ref={navigationRef}>
            <StackApp.Navigator initialRouteName="Login">
                <StackApp.Screen name="HomeApp" component={HomeStack} options={navOptionHandler}></StackApp.Screen>
                <StackApp.Screen name="Login" component={Login_screen} options={navOptionHandler}></StackApp.Screen>
            </StackApp.Navigator>
        </NavigationContainer>
    );
}

export default Routes;