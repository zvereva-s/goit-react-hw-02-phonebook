import { Component } from 'react';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handelFormSubmit = data => {
    const { name } = data;
    const { contacts } = this.state;
    const sameName = contacts.some(el => el.name === name);
    let contact = {};

    if (sameName) {
      alert(`${name} is already in contacts.`);
    } else {
      contact = { id: nanoid(3), ...data };
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };
  handleFilterData = e => {
    const { value } = e.target;
    this.setState({
      filter: value,
    })
    }
  getFilteredContacts(value) {
    const { contacts } = this.state;
    return contacts.filter(({name}) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
  }
  handleDelete = id=> {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),  
    }));
  }

  render() {
    const { contacts, filter } = this.state;
    const { handelFormSubmit, handleFilterData, handleDelete } = this;
    const filtredContacts = this.getFilteredContacts(filter);


    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={handelFormSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter
            title="Find contacts by name"
            filter={handleFilterData}
          />
          {filtredContacts.length !== 0 ? <ContactList contacts={filtredContacts} onClick={handleDelete} />  : <ContactList contacts={contacts} onClick={handleDelete}/>}
          
        </Section>
      </>
    );
  }
}

export default App;
