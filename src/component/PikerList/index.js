import * as React from 'react';
import { View, Text } from 'react-native';
import { Picker } from 'react-native-picker-dropdown'

import { styleForm } from '../../style';

function PickerList(props) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Picker
                selectedValue={props.selectedValue}
                onValueChange={props.onValueChange}
                mode={props.mode}
                prompt={props.prompt}
                style={styleForm.pickerInput}
                cancel>
                {
                    props.dataList &&
                    props.dataList.map(item => {
                        const id = item[props.dataId];
                        const name = item[props.dataName];
                        return (
                            <Picker.Item key={id+name} label={name} value={id} />
                        )
                    })
                }
            </Picker>
        </View>
    );
}

export default PickerList;