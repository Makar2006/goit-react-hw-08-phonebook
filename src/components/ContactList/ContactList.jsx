import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/authSelectors';

import ContactItem from './ContactItem';
import css from './ContactList.module.css';

const ContactList = () => {
  const { items } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const isLogedIn = useSelector(selectIsLoggedIn);

  const onFilterContacts = () => {
    if (filter === '') return items;

    return items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = onFilterContacts();

  return (
    <>
      {isLogedIn ? (
        <ul className={css.contactList}>
          {filteredContacts.length > 0 ? (
            filteredContacts.map(({ name, id, number }) => (
              <ContactItem key={id} name={name} id={id} number={number} />
            ))
          ) : (
            <li>
              <h2>Contact list is empty</h2>
            </li>
          )}
        </ul>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  );
};

export default ContactList;
