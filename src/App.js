import React from 'react';

function App(props){
    
    const facts = props.facts.map((fact, i) => {
        return <li key={i}>{fact.text}</li>
    });
    
    return (
        // <h1>Login</h1>
        <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
            <li>e</li>
        </ul>
    );
}