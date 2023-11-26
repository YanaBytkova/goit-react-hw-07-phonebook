import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.spravochnik.contacts;
export const selectIsLoading = state => state.spravochnik.isLoading;
export const selectError = state => state.spravochnik.error;
export const selectFilter = state => state.contactsStore.filter;


export const selectVisibleContacts = createSelector(
    [ selectContacts, selectFilter],
     (contacts, filter) => {
       return contacts.filter(contact => contact.name.toLowerCase()
        .includes(filter.toLowerCase()))
     }
    )