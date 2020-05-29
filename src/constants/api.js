const SERVER = 'http://192.168.0.4:80';
const APP_FOLDER = SERVER + '/workspace_eclipse/espaciosatsanga/';
const API_FOLDER = APP_FOLDER + 'api/';

/*const SERVER = 'http://admin.espaciosatsanga.com';
const APP_FOLDER = SERVER + '/';
const API_FOLDER = APP_FOLDER + 'api/';*/

export const API = {
    SERVER,
    AUTH: API_FOLDER + 'auth.php',
    SET_STUDENT: API_FOLDER + 'set-estudiante.php',
    GET_GENERAL_DATA: API_FOLDER + 'get-generaldata.php',
};

export const TABLE_NAME = {
    COMO_CONOCIO: 'comoConocio',
    ESTADO_ESTUDIANTE: 'estadoEstudiante',
    GENERO: 'genero',
}