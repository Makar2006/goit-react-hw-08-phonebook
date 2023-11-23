import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { getContacts } from '../../redux/contactsOperations';
import { selectIsLoggedIn } from '../../redux/authSelectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLogedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLogedIn) {
      dispatch(getContacts());
    }
  }, [dispatch, isLogedIn]);

  return (
    <>
      {isLogedIn && <ContactForm />}
      <ContactList />
    </>
  );
};

export default ContactsPage;
