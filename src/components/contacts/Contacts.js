import React from 'react';
import style from './contacts.module.css'

const Contacts = () => {
  return (
    <section className={style.contacts}>
      <div className="container">
        <div className={style.flexbox}>
          <span>mayerlibrary2020@gmail.com</span>
          <span>8-800-555-35-35</span>
        </div>
      </div>
    </section>
  );
}

export default Contacts;