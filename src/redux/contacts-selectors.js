import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;
const getAllContacts = state => state.contacts.items;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter),
    );
  },
);

const getExistingContactsName = createSelector([getAllContacts], contacts => {
  if (contacts.length >= 0) {
    return contacts.map(({ name }) => name.toLowerCase());
  }
});

export default {
  getLoading,
  getFilter,
  getVisibleContacts,
  getExistingContactsName,
};
