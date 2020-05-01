import React from "react";
import style from "./search.module.css";
import Button from "../button/button";

const Search = () => {
    return (
        <form className={style.search} action="" method="post">
            <input className={style.searchText} type="text" placeholder="Введите название, автора, жанр..."/>
            <Button value="Поиск"/>
        </form>
    );
}

export  default Search;