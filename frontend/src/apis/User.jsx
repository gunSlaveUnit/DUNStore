const URL_BASE = "http://localhost:8000/api/v1/users/auth/";

export async function signin(username, password) {
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            'username': username,
            'password': password,
        })
    };

    const res = await fetch(URL_BASE + "login/", requestOptions);
    const data = await res.json()
    return data['auth_token']
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

    const res = await fetch(URL_BASE + "register/", requestOptions);
    return await res.json()
}

export async function signout(token) {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        },
    };
    return await fetch(URL_BASE + "refresh/", requestOptions);
}

export async function getByToken(token) {
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        },
    };

    return await fetch(URL_BASE + "users/me", requestOptions);
}