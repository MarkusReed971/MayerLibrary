import React from "react";
import style from "./header.module.css"
import Search from "../search/Search"

const Header = () => {
    return (
        <header>
            <div className={style.headerInner}>
                <div className={style.logo}>MayerLibrary</div>
                <Search/>
                <div className={style.loginBox}>
                    <a href="#" className="loginButton">Войти</a>
                </div>
            </div>
        </header>
    );
}

export default Header;