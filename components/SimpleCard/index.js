import React from 'react';
import css from "./simplecard.module.scss"

const SimpleCard = ({children}) => {
    return(
        <div>
            <h1 style={{display: "flex",
    alignItems: "center",
    justifyContent: "center"}}>Sign up to the app</h1>
        <div className={css.simplecard}>
            {children}
        </div>
        </div>
    )
}

export default SimpleCard;

