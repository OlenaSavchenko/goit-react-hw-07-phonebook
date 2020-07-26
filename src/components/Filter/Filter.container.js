import { connect } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../redux';
import Filter from './Filter';

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchProps)(Filter);
