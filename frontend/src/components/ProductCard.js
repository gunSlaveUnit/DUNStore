import React from 'react';
import {A} from 'hookrouter';
import {add} from "../apis/CartAPI";
import {useCookies} from "react-cookie";

export default function ProductCard(props) {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const tokenAPI = {
        token: () => cookies.token,
        setToken: token => setCookie('token', token),
    };

    return (
        <div>
            <A href={`/catalog/${props.group}/detail/${props.slug}`} style={{textDecoration: 'none'}}>
                {props.title}
            </A>
            <button onClick={() => {
                add(tokenAPI.token(), props.group, props.slug, 1).then(() => {
                })
            }}>Add to a cart
            </button>
        </div>
    );
}