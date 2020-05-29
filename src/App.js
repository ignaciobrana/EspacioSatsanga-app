import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './contexts/auth';
import { navigationRef, isMountedRef } from './navigation/RootNavigation';
import Routes from './routes';

const App = () => {
    React.useEffect(() => {
        isMountedRef.current = true;
        return () => (isMountedRef.current = false);
    }, []);

    return (
        <NavigationContainer ref={navigationRef}>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </NavigationContainer>
    );
}

export default App;