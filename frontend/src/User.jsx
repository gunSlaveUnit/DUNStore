const URL_BASE = "http://localhost:8000/api/v1/auth/";
export let token = '';

export async function signin(email, password) {
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            'email': email,
            'password': password,
        })
    };

    const res = await fetch(URL_BASE + "token/login/", requestOptions);
    const data = await res.json()
    token = data['auth_token']
    return token
}

export async function signup(email, username, password) {
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            'email': email,
            'username': username,
            'password': password,
        })
    };

    const res = await fetch(URL_BASE + "users/", requestOptions);
    return await res.json()
}

export async function signout() {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        },
    };

    return await fetch(URL_BASE + "token/logout/", requestOptions);
}

export async function getByToken() {
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        },
    };

    return await fetch(URL_BASE + "users/me", requestOptions);
}