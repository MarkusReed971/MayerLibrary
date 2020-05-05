import React from "react";
import style from "./navigation.module.css"

const Navigation = () => {
    return (
        <div className={style.outer}>
            <div className="container">
                <nav>
                    <a href="/" className={style.thisPage}>Главная</a>
                    <a href="/catalog">Каталог</a>
                    <a href="/about_as">О нас</a>
                </nav>
            </div>
        </div>
    );
}

export default Navigation;