import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, Alert } from 'react-native';

import { useAuthContext } from '../../contexts/auth';

//import { saveUserToken } from '../../global/storage';
import { IMAGES } from '../../constants/image';
//import { navigate } from '../../navigation/RootNavigation';
import { styles, styleForm } from '../../style';

function SignIn() {
    const [username, setUsername] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const {signIn} = useAuthContext();

    const _handleUserNameText = text => {
        setUsername(text);
    }
    
    const _handlePasswordText = text => {
        setPassword(text);
    }

    const resetForm = () => {
        setUsername(null);
        setPassword(null);
    }

    const validForm = () => {
        return username != null && password != null && username != '' && password != '';
    };
    
    const _handleLogin = async () => {
        if (!validForm()) {
            Alert.alert('Complete los datos solicitados!');
            return;
        }

        //let response = await app_auth(username, password);
        let response = await signIn(username, password);
        if (response != null && response.success) {
            //saveUserToken(response);
            resetForm();
            //navigate('HomeApp');
        } else if (response == null || (response.error != undefined && response.error != null)) {
            Alert.alert('Se produjo un error realizando la autentificación.');
        } else {
            Alert.alert('El usuario y/o la contraseña son incorrectos.');
        }
    }

    return (
        <View style={styles.content}>
            <View style={styles.logoContainer}>
                <Image source={IMAGES.LOGO} style={styles.logo} resizeMode='contain' />
            </View>
            <TextInput 
                style={styleForm.textInput} 
                placeholder='Nombre de usuario' 
                onChangeText={_handleUserNameText} 
                value={username}
            />
            <TextInput 
                style={styleForm.textInput} 
                placeholder='Contraseña'
                secureTextEntry={true}
                onChangeText={_handlePasswordText}
                value={password}
            />
            <TouchableOpacity
                style={styleForm.button}
                onPress={_handleLogin}
            >
                <Text style={styleForm.buttonText}>
                    Ingresar
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignIn;