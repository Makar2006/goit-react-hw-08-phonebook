import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../..//redux/contactsOperations';
import css from './ContactList.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.contacts);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <li className={css.contactListItem}>
          <span>{name}:</span>
          <span>{number}</span>
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            x
          </button>
        </li>
      )}
    </>
  );
};

export default ContactItem;
