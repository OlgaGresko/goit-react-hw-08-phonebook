import React, { useState } from 'react';
import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from 'redux/operations';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.number);

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleEditMode = () => {
    setIsEditMode(prevState => !prevState);

    if (isEditMode) {
      const editedContact = {
        name: name.trim(),
        number: phone.trim(),
        id: contact.id,
      };
      dispatch(editContact(editedContact));
    }
  };

  return (
    <li className={css.item}>
      {isEditMode ? (
        <div>
          <input type="text" name="name" value={name} onChange={handleChange} />
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </div>
      ) : (
        <span>{`${contact.name}: ${contact.number}`}</span>
      )}
      <div className={css.buttonwrapper}>
        <button className={css.delete} type="button" onClick={handleEditMode}>
          {isEditMode ? 'Save' : 'Edit'}
        </button>
        <button
          className={css.delete}
          type="button"
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
