import React from 'react';
import css from "./simplecard.module.scss"

const SimpleCard = ({children, title}) => {
    return(
        <div>
            <h1 style={{ color:"white",display: "flex",
    alignItems: "center",
    justifyContent: "center"}}>{title}</h1>
        <div className={css.simplecard}>
            {children}
        </div>
        </div>
    )
}

export default SimpleCard;

