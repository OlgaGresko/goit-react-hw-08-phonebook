import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { selectContactsItems } from 'redux/selectors';
import { addContact } from 'redux/operations';

export default function ContactForm() {
  const contacts = useSelector(selectContactsItems);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        break;
    }
  };

  const createContact = e => {
    e.preventDefault();
    if (
      contacts.find(contact => {
        return contact.name === name.trim();
      })
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      name: name.trim(),
      number: number.trim(),
      id: nanoid(),
    };

    setName('');
    setNumber('');

    dispatch(addContact(newContact));
  };

  return (
    <>
      <form className={css.form} onSubmit={createContact}>
        <label className={css.label} htmlFor="name">
          {' '}
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChange}
            required
          />
        </label>
        <label className={css.label} htmlFor="number">
          {' '}
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleChange}
            required
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
      <hr className={css.hr} />
    </>
  );
}
