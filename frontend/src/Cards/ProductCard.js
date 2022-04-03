import React from 'react';
import {A} from 'hookrouter';

export default function ProductCard (props) {
    return (
         <section className="ProductCard">
             <A href={`/catalog/${props.group}/detail/${props.slug}`}>
                <h3>{props.title}</h3>
             </A>
         </section>
    );
}