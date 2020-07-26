import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux';
import ContactList from './ContactList';

const mapStateProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchProps = dispatch => ({
  deleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});
export default connect(mapStateProps, mapDispatchProps)(ContactList);
