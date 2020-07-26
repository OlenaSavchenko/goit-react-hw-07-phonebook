import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '../Container';
import Section from '../Section';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

class App extends Component {
  static propTypes = {
    fetchContacts: PropTypes.func.isRequired,
    isLoadingContacts: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          {this.props.isLoadingContacts && <h1>Loading...</h1>}
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </Container>
    );
  }
}
export default App;
