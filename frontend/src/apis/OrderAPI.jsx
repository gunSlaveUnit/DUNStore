const URL_BASE = "http://localhost:8000/api/v1/order/";

export async function create(what, how, token) {
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

export async function pay(cardPaymentInfo, token) {
    const requestOptions = {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cardPaymentInfo)
    };

    const res = await fetch(URL_BASE + "payment/" , requestOptions);
    return await res.json()
}