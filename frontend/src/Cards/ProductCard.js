import React from 'react';

export default function ProductCard (props) {
    return (
         <section className="ProductCard">
             <a href={`/catalog/${props.group}/detail/${props.slug}`}>
                <h3>{props.title}</h3>
             </a>
         </section>
    );
}