import React from 'react';

export default function CategoryCard (props) {
    return (
         <section className="CategoryCard">
             <a href={`/catalog/${props.slug}`}>
                <h2>{props.title}</h2>
             </a>
         </section>
    );
}