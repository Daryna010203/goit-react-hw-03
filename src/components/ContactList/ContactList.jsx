import css from './ContactList.module.css';

import Contact from '../Contact/Contact.jsx';

const ContactList = ({ arreyContact }) => {
  return (
    <ul className={css.list}>
      {arreyContact.map(contacts => {
        return (
          <li key={contacts.id} className={css.contact}>
            <Contact name={contacts.name} number={contacts.number} />
            <div>
              <button type="button">Delete</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
