import React from 'react';
import './App.css';
import Navigation from "./components/navigation/Navigation";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./components/main/Main";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigation/>
                <Header/>
                <Switch>
                    <Route path='/'>
                        <Main/>
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
