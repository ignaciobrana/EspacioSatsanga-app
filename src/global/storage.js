import { AsyncStorage } from 'react-native';

import {STORAGE} from '../constants/storage';

export const getUser = async () => {
    const user = await AsyncStorage.getItem(STORAGE.USER_TOKEN);
    return user;
}

export const saveUser = async (data) => {
    await AsyncStorage.setItem(STORAGE.USER_TOKEN, JSON.stringify(data));
}

export const removeUser = async () => {
    await removeExpo();
    return await AsyncStorage.removeItem(STORAGE.USER_TOKEN);
}

export const getExpo = async () => {
    const expoToken = await AsyncStorage.getItem(STORAGE.EXPO_TOKEN);
    return expoToken;
}

export const saveExpo = async (data) => {
    await AsyncStorage.setItem(STORAGE.EXPO_TOKEN, data);
}

export const removeExpo = async () => {
    return await AsyncStorage.removeItem(STORAGE.EXPO_TOKEN);
}