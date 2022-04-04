import React from 'react';
import {A} from 'hookrouter';

export default function CategoryCard(props) {
    return (
        <A href={`/catalog/${props.slug}/list`}>
            <section className="CategoryCard container">
                <div className="card text-center" style={{width: "18rem", height: "4rem"}}>
                    <h3 className={"card-title"}>{props.title}</h3>
                </div>
            </section>
        </A>
    );
}