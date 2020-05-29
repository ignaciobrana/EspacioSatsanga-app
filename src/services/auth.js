import { API } from '../constants/api';

const app_auth = async (username, password) => {
    try {
        const response = await fetch(API.AUTH, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
            })
        });
        const resp_json = await response.json();
        return resp_json;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export default app_auth;