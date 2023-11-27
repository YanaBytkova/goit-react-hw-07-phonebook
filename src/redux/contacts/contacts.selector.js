import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.spravochnik.contacts;
export const selectIsLoading = state => state.spravochnik.isLoading;
export const selectError = state => state.spravochnik.error;
export const selectFilterTerm = state => state.contactsStore.filterTerm;


export const selectVisibleContacts = createSelector(
    [ selectContacts, selectFilterTerm],
     (contacts, filterTerm) => {
       return contacts.filter(contact => contact.name.toLowerCase()
        .includes(filterTerm.toLowerCase()))
     }
    )