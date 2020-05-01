import React from "react";
import style from "./book.module.css";
import img1 from "../../image/book-01-188x246.jpg";
import Button from "../button/button";

const Book = () => {
    return (
        <div className={style.book}>
            <div className={style.imageBox} src="" alt="">
                <img src={img1} />
            </div>
            <div className={style.title}>Безумно умная книга о вселенной</div>
            <div className={style.author}>О.Ч. Классный</div>
        </div>
    );
}

export default Book;
