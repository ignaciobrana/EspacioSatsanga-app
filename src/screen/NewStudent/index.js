import * as React from 'react';
import { Text, Alert, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import moment from 'moment';

import set_student from '../../services/student';
import { get_HowYouKnowUs, get_Gender } from '../../services/generalData';
import Header from '../../component/Header';
import PickerList from '../../component/PikerList';
import DatePicker from '../../component/DatePicker';
import { styleForm } from '../../style';
import Loading from '../../component/Loading/';

function NewStudentScreen() {
    const [name, setName] = React.useState(null);
    const [birthday, setBirthday] = React.useState(null);
    const [genderId, setGenderId] = React.useState(null);
    const [studentStateId, setStudentStateId] = React.useState(1); //Activo
    const [howYouKnowUsId, setHowYouKnowUsId] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [email2, setEmail2] = React.useState(null);
    const [observaciones, setObservaciones] = React.useState('');
    const [celphone, setCelphone] = React.useState(null);
    const [telephone, setTelephone] = React.useState(null);
    const [insertDate, setInsertDate] = React.useState(null);
    const [deletionDate, setDeletionDate] = React.useState('');

    const [howYouKnowsUs_List, setHowYouKnowUs_List] = React.useState(null);
    const [gender_List, setGender_List] = React.useState(null);
    const [showLoading, setShowLoading] = React.useState(false);

    React.useEffect(() => {
        async function fetchData() {
            const response_HowYouKnowsUs = await get_HowYouKnowUs();
            setHowYouKnowUs_List(response_HowYouKnowsUs);
            //Seteamos como default el primer elemento
            if (response_HowYouKnowsUs.length > 0)
                setHowYouKnowUsId(response_HowYouKnowsUs[0]._idComoConocio);

            const response_gender = await get_Gender();
            setGender_List(response_gender);
            //Seteamos como default el primer elemento
            if (response_gender.length > 0)
                setGenderId(response_gender[0]._idGenero);

            setShowLoading(false);
        }
        setShowLoading(true);
        fetchData();
    }, []);

    const _handleSaveStudent = async () => {
        setShowLoading(true);
        if (!validForm()) { setShowLoading(false); return; }

        const today = moment(new Date(Date.now())).format('DD/MM/YYYY');
        const response =
            await set_student(0, name, moment(birthday).format('DD/MM/YYYY'), genderId, studentStateId,
                howYouKnowUsId, email, null, celphone, telephone, today, '');
        setShowLoading(false);
        if (response.status == 'success') {
            clearForm();
            Alert.alert('Bienvenido al espacio Satsanga. Que disfrutes de tu práctica!!');
        } else {
            Alert.alert('Se produjo un error guardando los datos.');
        }
    }

    const _handleName = (name) => { setName(name); }
    const _handleEmail = (email) => { setEmail(email); }
    const _handleEmail2 = (email) => { setEmail2(email); }
    const _handleCelphone = (celphone) => { setCelphone(celphone); }
    const _handleTelephone = (telephone) => { setTelephone(telephone); }
    const _onGenderValueChange = (genderId) => { setGenderId(genderId); }
    const _onHowYouKnowUsValueChange = (howYouKnowUsId) => { setHowYouKnowUsId(howYouKnowUsId); }

    const _changeDateTimePicker = (event, selectedDate) => {
        const currentDate = selectedDate || birthday;
        setBirthday(currentDate);
    };

    const clearForm = () => {
        setName(null);
        setBirthday(null);
        setGenderId(null);
        setHowYouKnowUsId(null);
        setEmail(null);
        setEmail2(null);
        setCelphone(null);
        setTelephone(null);
    }

    const validForm = () => {
        if ((name == null || name == '') || birthday == null ||
            (email == null || email == '') || (email == null || email2 == '') ||
            genderId == null || howYouKnowUsId == null) {
            Alert.alert('Faltan datos por completar');
            return false;
        } else if (!validateEmail(email)) {
            Alert.alert('El formato del Email es incorrecto');
            return false;
        } else if (!validateEmail(email2)) {
            Alert.alert('El formato de la confirmación del Email es incorrecto');
            return false;
        } else if (email != email2) {
            Alert.alert('Los campos Email y su confirmación no son iguales');
            return false;
        }
        return true;
    }

    const validateEmail = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(text);
    }

    if (showLoading)
        return <Loading />;

    return (
        <>
            <Header />
            <ScrollView style={{ backgroundColor: '#fff' }}>
                <SafeAreaView style={style.content}>
                    <Text style={styleForm.title}>
                        Cargar Alumno Nuevo
                    </Text>
                    <TextInput
                        style={styleForm.textInput}
                        placeholder='Nombre y Apellido'
                        onChangeText={_handleName}
                        value={name}
                    />
                    <DatePicker
                        value={birthday}
                        placeholder='Fecha de nacimiento'
                        onChange={_changeDateTimePicker}
                    />
                    <PickerList
                        selectedValue={genderId}
                        onValueChange={_onGenderValueChange}
                        mode='modal'
                        prompt='Genero'
                        dataList={gender_List}
                        dataId='_idGenero'
                        dataName='_nombre'
                    />
                    <TextInput
                        style={styleForm.textInput}
                        placeholder='Email'
                        onChangeText={_handleEmail}
                        value={email}
                    />
                    <TextInput
                        style={styleForm.textInput}
                        placeholder='Confirme su Email'
                        onChangeText={_handleEmail2}
                        value={email2}
                    />
                    <TextInput
                        style={styleForm.textInput}
                        placeholder='Celular'
                        onChangeText={_handleCelphone}
                        value={celphone}
                    />
                    <TextInput
                        style={styleForm.textInput}
                        placeholder='Teléfono'
                        onChangeText={_handleTelephone}
                        value={telephone}
                    />
                    <PickerList
                        selectedValue={howYouKnowUsId}
                        onValueChange={_onHowYouKnowUsValueChange}
                        mode='dialog'
                        prompt='Cómo nos conoció?'
                        dataList={howYouKnowsUs_List}
                        dataId='_idComoConocio'
                        dataName='_nombre'
                    />

                    <TouchableOpacity
                        style={styleForm.button}
                        onPress={() => _handleSaveStudent()}
                    >
                        <Text style={styleForm.buttonText}>
                            Guardar
                        </Text>
                    </TouchableOpacity>

                </SafeAreaView>
            </ScrollView>
        </>
    );
}

export default NewStudentScreen;

const style = StyleSheet.create({
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
    }
});