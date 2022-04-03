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

export async function create(what, how) {
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(how)
    };

    const res = await fetch(URL_BASE + what + "/", requestOptions);
    return await res.json()
}

export async function update(what, slug, how) {
    const requestOptions = {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(how)
    };

    const res = await fetch(URL_BASE + what + "/" + slug + "/", requestOptions);
    return await res.json()
}

export async function del(what, slug) {
    const requestOptions = {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
    };

    const res = await fetch(URL_BASE + what + "/" + slug + "/", requestOptions);
    return await res.json()
}