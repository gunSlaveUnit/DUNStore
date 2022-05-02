const URL_BASE = "http://localhost:8000/api/v1/cart/";

export async function add(token, category, slug, amount) {
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(
            {
                "token": token,
                "category": category,
                "slug": slug,
                "amount": amount
            }
        )
    };

    const res = await fetch(URL_BASE, requestOptions);
    return await res.json()
}