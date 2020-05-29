import React, { createContext, useState, useEffect } from 'react';

import app_auth from '../services/auth';
import * as storage from '../global/storage';

const AuthContext = createContext();

export const useAuthContext = () => {
    return React.useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const storageUser = await storage.getUser();
            if (storageUser)
                setUser(storageUser);
            setLoading(false);
        }
        loadStorageData();
    }, []);

    async function signIn(username, password) {
        try {
            setLoading(true);
            let response = await app_auth(username, password);
            if (response != null && response.success) {
                setUser({
                    _idUsuario: response._idUsuario,
                    _nombreUsuario: response._nombreUsuario
                });
                storage.saveUser(user);
            }
            return response;
        } catch (err) { console.log(err); } 
        finally { setLoading(false); }
    }

    function signOut() {
        setUser(null);
        storage.removeUser();
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}