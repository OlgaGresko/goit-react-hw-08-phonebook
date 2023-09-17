import { createSelector } from '@reduxjs/toolkit';

export const selectUserAuthentication = state => state.auth.authenticated;
export const selectUserData = state => state.auth.userData;
export const selectUserIsLoading = state => state.auth.isLoading;
export const selectUserError = state => state.auth.error;
export const selectUserToken = state => state.auth.token;
export const selectIsRefreshing = state => state.auth.isRefreshing;


export const selectContactsError = state => state.auth.error;

export const selectFilterValue = state => state.filter;
export const selectContactsItems = state => state.contacts.items;
// export const selectContactsIsLoading = state => state.contacts.isLoading;
// export const selectContactsError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContactsItems, selectFilterValue],
  (contacts, value) => {
    if (!Array.isArray(contacts)) {
      return [];
    }
    const normalizedValue = value.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
  }
);
