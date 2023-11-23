import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contactsOperetions';
import { selectIsLoggedIn } from 'redux/authSelectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLogedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLogedIn) {
      dispatch(fetchContacts());
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
