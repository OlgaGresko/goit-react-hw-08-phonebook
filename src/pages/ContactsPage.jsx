import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';
import { Audio } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectUserError, selectUserIsLoading } from 'redux/selectors';

const ContactsPage = () => {
    const error = useSelector(selectUserError);
    const isLoading = useSelector(selectUserIsLoading);
  return (
    <>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {error !== null && <p>Oops, an error has occurred...</p>}
      {isLoading && (
        <Audio height="80" width="80" color="grey" ariaLabel="loading" />
      )}
      <ContactList />
    </>
  );
};

export default ContactsPage;
