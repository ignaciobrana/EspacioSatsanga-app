import * as React from 'react';
import { TouchableOpacity, TextInput, Keyboard } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import { styleForm } from '../../style';

function DatePicker(props) {
    const [showDatePicker, setShowDatePicker] = React.useState(false);

    const _openDatePicker = () => {
        setShowDatePicker(true);
        Keyboard.dismiss();
    }

    return (
        <>
            <TouchableOpacity onPress={_openDatePicker}>
                <TextInput
                    style={styleForm.textInput}
                    placeholder={props.placeholder}
                    onFocus={_openDatePicker}
                    value={props.value && moment(props.value).format('DD/MM/YYYY')}
                />
            </TouchableOpacity>
            {
                showDatePicker &&
                <DateTimePicker
                    testID="dateTimePicker"
                    value={props.value || new Date(Date.now())}
                    mode='date'
                    display='default'
                    placeholder={props.placeholder}
                    onChange={(event, selectedDate) => {
                        setShowDatePicker(Platform.OS === 'ios');
                        props.onChange(event, selectedDate);
                    }}
                />
            }
        </>
    );
}

export default DatePicker;