import React from 'react';

const Button = ( name, onclick ) => {
    return (
        <button onClick={onclick}>{name}</button>
    )
}

export default Button;