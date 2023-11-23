
import css from './ContactList.module.css';

import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
  let contacts = useSelector(state => state.contactsStore.contacts);
  const filterContacts = useSelector(state => state.contactsStore.filterContacts);
  const filter = useSelector(state => state.contactsStore.filter);
  if (filter.length > 0) {
       contacts = filterContacts;   }
       return (
        <ul className={css.list}>  
         {contacts.map(contact => (
              <ContactItem contact={contact} key={contact.id}/> 
        ))  }
        </ul>
  )  ; 
  
}
export default ContactList;
    
    



