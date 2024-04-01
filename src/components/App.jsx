import './App.css'
import { useState, useEffect } from 'react';
import ContactList from './Contacts/ContactList';
import SearchBox from './Search/SearchBox';
import ContactForm from "./Form/ContactForm"

const App = () => {
  const [contacts, setContacts] = useState([
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]);
  const [filter, setFilter] = useState('');
    
  const addContacts = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContacts = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) => 
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return(
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        onAdd = {addContacts}
      />
      <SearchBox
        value = {filter}
        onFilter = {setFilter}
      />
      <ContactList
        contacts = {visibleContacts}
        onDelete = {deleteContacts}
      />
    </div>)
}
export default App;

