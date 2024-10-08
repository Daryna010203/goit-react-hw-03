import './App.module.css';

import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import baseContacts from '../baseContacts.json';
import { useState, useEffect } from 'react';

const App = () => {
  const [arreyContact, setArreyContact] = useState(baseContacts);

  console.log(arreyContact);

  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList arreyContact={arreyContact} />
    </section>
  );
};

export default App;
