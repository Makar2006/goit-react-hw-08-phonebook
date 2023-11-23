import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/authSelectors';

import css from './ContactList.module.css';

const ContactList = ({ onRemoveContact }) => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const isLogedIn = useSelector(selectIsLoggedIn);

  const onFilterContacts = () => {
    if (filter === '') return contacts;

    return contacts.filter(({ name }) =>
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
              <li
                className={css.contactListItem}
                key={id}
                name={name}
                id={id}
                number={number}
              >
                <span className={css.itemSpan}>{name}:</span>
                <span className={css.itemSpan}>{number}</span>
                <button
                  className={css.deleteButton}
                  type="button"
                  onClick={() => onRemoveContact(id)}
                >
                  Delete
                </button>
              </li>
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
