import React from 'react';
import {A} from 'hookrouter';

export default function CategoryCard(props) {
    return (
        <A href={`/catalog/${props.slug}/list`}>
            <section className="CategoryCard">
                <div>
                    <h3>{props.title}</h3>
                </div>
            </section>
        </A>
    );
}