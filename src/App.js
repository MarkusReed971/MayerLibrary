import React from 'react';
import './App.css';
import Navigation from "./components/navigation/Navigation";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider"
import Popular from './components/popular/Popular'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Slider />
      <Popular />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
