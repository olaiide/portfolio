import React, { Fragment } from 'react';
import './Button.css';
const Button = ({children,...otherProps}) => {
    return (
     <Fragment>
         <button className="button">{children}</button>
     </Fragment>
    )
}

export default Button;