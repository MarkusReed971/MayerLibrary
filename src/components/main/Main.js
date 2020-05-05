import React from 'react';

import Slider from "../slider/Slider"
import Popular from '../popular/Popular'
import Contacts from '../contacts/Contacts'


const Main = () => {
    return (
        <section className='Main'>
            <Slider/>
            <Popular />
            <Contacts />
        </section>
    );
}

export default Main;