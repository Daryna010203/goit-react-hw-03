import css from './ContactList.module.css';

import Contact from '../Contact/Contact.jsx';

const ContactList = ({ userFilter, onDeleteProfile }) => {
  return (
    <ul className={css.list}>
      {userFilter.map(contacts => {
        return (
          <li key={contacts.id} className={css.contact}>
            <Contact name={contacts.name} number={contacts.number} />
            <div>
              <button
                type="button"
                onClick={() => {
                  onDeleteProfile(contacts.id);
                }}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
