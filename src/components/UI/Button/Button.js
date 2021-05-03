import React from 'react';

const Button = (props) => {
    const { to, btnType, children } = props;

    let styleClasses = '';
    if (btnType === 'white') {
        styleClasses = 'btn btn-default btn-border';
    } else if (btnType === 'black') {
        styleClasses = 'btn btn-default btn-black-border';
    }

    return (
        <div>
            <a href={to} className={styleClasses}>
                {children}
            </a>
        </div>
    );
};

export default Button;
