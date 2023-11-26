
import css from './ContactList.module.css';
import React, { useEffect } from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts} from 'redux/contacts/contacts.reducer';
import { selectContacts, selectFilter, selectVisibleContacts } from 'redux/contacts/contacts.selector';

const ContactList = () => {
  const dispatch = useDispatch();
  let contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilter);
  if (filter.length > 0) {
       contacts = filterContacts;   }
  
 

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

       return (
        <ul className={css.list}>  
         {contacts.map(contact => (
              <ContactItem contact={contact} key={contact.id}/> 
        ))  }
        </ul>
  )  ; 
  
}
export default ContactList;
    
    



