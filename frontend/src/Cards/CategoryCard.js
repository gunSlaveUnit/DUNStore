import React from 'react';

export default function CategoryCard (props) {
    return (
         <section className="CategoryCard">
             <a href={`/catalog/${props.slug}/list`}>
                <h3>{props.title}</h3>
             </a>
         </section>
    );
}