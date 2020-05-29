import { API } from '../constants/api';

const set_student = async (idEstudiante, nombreApellido, fechaNacimiento, idGenero, idEstadoEstudiante, idComoConocio, email, observaciones, celular, telefono, fechaAlta, fechaBaja) => {
    try {
        const response = await fetch(API.SET_STUDENT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                idEstudiante, nombreApellido, fechaNacimiento, idGenero, idEstadoEstudiante, idComoConocio,
                email, observaciones, celular, telefono, fechaAlta, fechaBaja
            })
        });
        const response_json = await response.json();
        return response_json;
    } catch (err) { 
        console.log(err);
        return null;
    }
}

export default set_student;