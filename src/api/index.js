import { apiURL } from '@/config';

const find = async (type, query, options) => {
    let response = await fetch(`${apiURL}/find`, {
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        method: 'POST',
        body: JSON.stringify({ type, query, options }),
    })
    if(!response.ok) {
        throw response.statusText;
    }
    return await response.json();
}

const logIn = async (user) => {
    let response = await fetch(`${apiURL}/login`, {
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        method: 'POST',
        body: JSON.stringify(user),
    });
    if(!response.ok) {
        throw response.statusText;
    }
    return await response.json();
}

export {
    find,
    logIn,
}

export default {
    find,
    logIn,
}