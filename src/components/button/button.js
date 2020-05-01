import React from 'react';
import style from "./button.module.css"

const Button = (prop) => {
    return prop.className != undefined ?
        <input className={`${style.button} ${prop.className}`} type="button" value={prop.value} /> :
        <input className={style.button} type="button" value={prop.value} />
}

export default Button;