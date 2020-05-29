import React from 'react';
//import { createStackNavigator } from '@react-navigation/stack';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { useAuthContext } from '../contexts/auth';
import Loading from '../component/Loading';

/*const navOptionHandler = () => ({
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
}*/

function Routes() {
    const { signed, loading } = useAuthContext();
    /*return (
        <StackApp.Navigator initialRouteName="Login">
            <StackApp.Screen name="HomeApp" component={HomeStack} options={navOptionHandler}></StackApp.Screen>
            <StackApp.Screen name="Login" component={Login_screen} options={navOptionHandler}></StackApp.Screen>
        </StackApp.Navigator>
    );*/
    if (loading) return <Loading />;

    return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;