import React from 'react';
import NewStudent from '../screen/NewStudent';

import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

const navOptionHandler = () => ({
    headerShown: false
});

const AppRoutes = () => {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="NewStudent" component={NewStudent} options={navOptionHandler} />
        </AppStack.Navigator>
    );
};

export default AppRoutes;