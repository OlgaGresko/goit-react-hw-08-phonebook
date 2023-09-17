import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { selectFilteredContacts } from 'redux/selectors';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        return <ContactListItem contact={contact} key={contact.id} />;
      })}
    </ul>
  );
}
