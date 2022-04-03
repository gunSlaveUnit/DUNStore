import React from 'react';

export default function ProductCard (props) {
    return (
         <section className="ProductCard">
             <a href={`/catalog/${props.group}/detail/${props.slug}`}>
                <h6>{props.title}</h6>
             </a>
         </section>
    );
}