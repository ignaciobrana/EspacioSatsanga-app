import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    text: {
        alignItems: 'center',
        color: '#222',
        fontSize: 20,
        fontWeight: 'bold'
    },
    logoContainer: {
        marginBottom: 20
    },
    logo: {
        width: 300
    }
});

export const styleForm = StyleSheet.create({
    inputContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 52,
        width: '100%',
        marginVertical: 5
    },
    title: {
        alignItems: 'center',
        color: '#CC6699',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 15,
    },
    textInput: {
        marginVertical: 5,
        height: 45,
        width: 300,
        paddingHorizontal: 8,
        fontSize: 16,
        color: '#535a55',
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#535a55'
    },
    pickerInput: {
        marginVertical: 5,
        height: 45,
        width: 300,
        paddingHorizontal: -8,
        fontSize: 16,
        color: '#535a55',
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#535a55',
    },
    button: {
        width: 180,
        height: 42,
        marginVertical: 10,
        paddingVertical: 7,
        paddingHorizontal: 7,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CC6699',
        borderRadius: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});