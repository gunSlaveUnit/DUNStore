import React from 'react';
import {A} from 'hookrouter';

export default function CategoryCard({product}) {
    return (
        <div>
            <A href={`/catalog/${product.slug}/list`}>
                {product.title}
            </A>
            <img src={product.poster} alt={`${product.title} poster`}/>
        </div>
    );
}