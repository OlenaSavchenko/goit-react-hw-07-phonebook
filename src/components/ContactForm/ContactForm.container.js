import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import { contactsOperations, contactsSelectors } from '../../redux';

const mapStateToProps = state => ({
  existingContactsName: contactsSelectors.getExistingContactsName(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(contactsOperations.addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
