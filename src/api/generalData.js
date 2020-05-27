import { TABLE_NAME, API } from '../constants/api';

export const get_HowYouKnowUs = async () => {
    const response = await get_generalData(TABLE_NAME.COMO_CONOCIO);
    return response;
}

export const get_StudentState = async () => {
    const response = await get_generalData(TABLE_NAME.ESTADO_ESTUDIANTE);
    return response;
}

export const get_Gender = async () => {
    const response = await get_generalData(TABLE_NAME.GENERO);
    return response;
}

const get_generalData = async (tableName) => {
    try {
        const response = await fetch(API.GET_GENERAL_DATA, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                table: tableName
            })
        });
        const response_json = await response.json();
        return response_json;
    } catch (err) {
        console.log(err);
        return null;
    }
}