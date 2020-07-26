import React from 'react';
import PropTypes from 'prop-types';
import ContactlistItem from '../ContactListItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, ...contact }) => {
        return (
          <ContactlistItem
            key={id}
            contact={contact}
            onDeleteContact={() => deleteContact(id)}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
