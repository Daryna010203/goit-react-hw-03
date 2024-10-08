import css from './Contact.module.css';
import { FaUserLarge, FaPhone } from 'react-icons/fa6';

const Contact = ({ name, number }) => {
  return (
    <div>
      <div className={css.box}>
        <FaUserLarge />
        <span>{name}</span>
      </div>
      <div>
        <FaPhone />
        <span>{number}</span>
      </div>
    </div>
  );
};

export default Contact;
