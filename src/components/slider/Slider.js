import React from "react";
import Button from "../button/button";
import style from "./slider.module.css";

const Slider = () => {
    return (
        <section className="slider">
            <div className={style.item}>
                <div className={style.blackout}></div>
                <div className={style.content}>
                    <p className={style.welcome}>MayerLibrary</p>
                    <h2>Ну очень классная библиотека</h2>
                    <p className={style.text}>Длинный текст, описывающий какая же классная библиотека,
                        как много в ней книг, известных авторов, сотрудников, собак, шприцов, жуков
                        и чего-то ещё важного для любой библиотеки!</p>
                    <Button className={style.button} value="Смотреть каталог"/>
                </div>
            </div>
        </section>
    );
}

export default Slider;