import React from 'react';
import css from "./simplecard.module.scss"

const SimpleCard = ({children}) => {
    return(
        <div className={css.simplecard}>
            {children}
        </div>
    )
}

export default SimpleCard;

