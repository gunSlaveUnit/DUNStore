const URL_BASE = "http://localhost:8000/api/v1/store/";

export async function list(what) {
    const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    };

    const res = await fetch(URL_BASE + what + "/", requestOptions);
    return await res.json()
}

export async function detail(what, slug) {
    const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    };

    const res = await fetch(URL_BASE + what + "/" + slug + "/", requestOptions);
    return await res.json()
}

export async function getFields(what, how, token) {
    const requestOptions = {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(how)
    };

    const res = await fetch(URL_BASE + what + "/", requestOptions);
    return await res.json()
}

export async function create(what, how, token) {
    const requestOptions = {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + token,
        },
        body: how
    };

    const res = await fetch(URL_BASE + what + "/", requestOptions);
    return await res.json()
}

export async function update(what, slug, how, token) {
    const requestOptions = {
        method: "PUT",
        headers: {
            "Authorization": "Bearer " + token,
        },
        body: how
    };

    const res = await fetch(URL_BASE + what + "/" + slug + "/", requestOptions);
    return await res.json()
}

export async function del(what, slug, token) {
    const requestOptions = {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        },
    };

    return await fetch(URL_BASE + what + "/" + slug + "/", requestOptions);
}