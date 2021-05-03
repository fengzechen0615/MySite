import React from 'react';

const Href = (props) => {
    const { to, name, type } = props;
    return (
        <a href={to}>
            {type === 'image' ? (
                <img
                    class='img-responsive'
                    src={`./images/${name}.svg`}
                    alt={name}
                ></img>
            ) : (
                name
            )}
        </a>
    );
};

export default Href;
