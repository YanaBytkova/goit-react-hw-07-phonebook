import React from 'react';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts.reducer';

const ContactItem = ({ contact }) => {
      const dispatch = useDispatch();

      const handleDeleteContacts = contactId => {
            dispatch(deleteContact(contactId));
          };
      
      
      return (
          
                  <li key={contact.id} className={css.item}>
                        <span className={css.name}>{contact.nameUser}</span>
                        <span className={css.number}>{contact.number}</span>
                         <button className={css.button} onClick={() => handleDeleteContacts(contact.id)}
                        type="button">Delete</button>
                  </li>

      )  ; 
          
      
};
export default ContactItem;