import { AsyncStorage } from 'react-native';

import {STORAGE} from '../constants/storage';

export const getUserToken = async () => {
    const user = await AsyncStorage.getItem(STORAGE.USER_TOKEN);
    return user;
}

export const saveUserToken = async (data) => {
    await AsyncStorage.setItem(STORAGE.USER_TOKEN, JSON.stringify(data));
}

export const removeUserToken = async () => {
    await removeExpoToken();
    return await AsyncStorage.removeItem(STORAGE.USER_TOKEN);
}

export const getExpoToken = async () => {
    const expoToken = await AsyncStorage.getItem(STORAGE.EXPO_TOKEN);
    return expoToken;
}

export const saveExpoToken = async (data) => {
    await AsyncStorage.setItem(STORAGE.EXPO_TOKEN, data);
}

export const removeExpoToken = async () => {
    return await AsyncStorage.removeItem(STORAGE.EXPO_TOKEN);
}