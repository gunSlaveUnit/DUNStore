import React from 'react';
import {A} from 'hookrouter';

export default function CategoryCard(props) {
    return (
        <div>
            <A href={`/catalog/${props.slug}/list`}>
                {props.title}
            </A>
        </div>
    );
}