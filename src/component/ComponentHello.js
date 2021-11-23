import React from "react";

function Greeting (props) {
    // Example Immutable
    // props.name = 'Immutable'
    return (
        <h1>Hello {props.name}</h1>
    )
}

export const GreetingArrow = () => {
    const greeting = 'Hello Arrow Function'
    return (
        <h1>{greeting}</h1>
    )
}

export default Greeting;