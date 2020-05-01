import React from 'react';
import style from "./popular.module.css"
import Button from "../button/button";
import img1 from "../../image/book-01-188x246.jpg"
import Book from "../book/Book";

const Popular = () => {
    return (
        <section className="popular">
            <div className="container">
                <h3>Популярные книги</h3>
                <div className={style.books}>
                    <Book/>
                    <Book/>
                    <Book/>
                    <Book/>
                    <Book/>
                    <Book/>
                    <Book/>
                    <Book/>
                    <Book/>
                </div>
                <Button className={style.moreButton} value="Показать больше" />
            </div>
        </section>
    );
}

export default Popular;