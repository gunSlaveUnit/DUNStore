import React from 'react';
import {A} from 'hookrouter';

export default function CategoryCard (props) {
    return (
         <section className="CategoryCard">
             <A href={`/catalog/${props.slug}/list`}>
                <h3>{props.title}</h3>
             </A>
         </section>
    );
}