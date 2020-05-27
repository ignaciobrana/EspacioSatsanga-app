import * as React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';

import { styles } from '../../style';
import { IMAGES } from '../../constants/image';

function Header() {
    return (
        <SafeAreaView>
            <View style={style.topBar}></View>
            <View style={style.container}>
                <View style={style.leftMenu}></View>
                <View style={style.center}>
                    <View style={style.logoContainer}>
                        <Image source={IMAGES.LOGO} style={style.logo} resizeMode='contain' />
                    </View>
                </View>
                <View style={style.right}></View>
            </View>
        </SafeAreaView>
    );
}

export default Header;

const style = StyleSheet.create({
    topBar: {
        height: 25,
        backgroundColor: '#FFF',
    },
    container: {
        flexDirection: 'row',
        height: 80,
        width: '100%',
        backgroundColor: '#fff',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#669',
        zIndex: 5,
        //elevation: 5,
    },
    leftMenu: { flex: 1 },
    center: { flex: 2.5 },
    right: { flex: 1 },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 200
    }
});