import * as React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

function Loading(props) {
    return (
        <View
            style={
                [styles.container,
                styles.horizontal,
                props.animating ? 
                    {backgroundColor: '#E1E1E1'} 
                : 
                    {backgroundColor: '#FFF'}]
            }
        >
            <ActivityIndicator
                size="large"
                animating={props.animating}
            />
        </View>
    );
}

export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        position: 'absolute',
        //backgroundColor: '#EFEFEF'
        //backgroundColor: '#FFF'
    },

    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        width: '100%',
        height: '100%'
    },
});