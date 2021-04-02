import React from 'react';

function Button({ text, clickFunction}) {
    return (
        <div className="button" onClick={clickFunction}>
            {text}
        </div>
    );
}

export default Button;
