
import AddContact from './AddContact';
import ContactList from './ContactList';
import Header from './Header';
import { useState, useEffect } from 'react';
import {v4 as uuid} from 'uuid';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  const [contacts, setContacts] = useState([]);

//   const contacts = [

//     { id: '1', 
//     name: 'Tavant', 
//     email: 'tavant@gmail.com' 
//   },
//   { id: '2', 
//   name: 'ABC', 
//   email: 'abc@gmail.com' 
// }
// ]

 const addContactHandler = (contact) => {
  console.log(contact);
  setContacts([...contacts,{id:uuid(),...contact}]);
 }

 const removeContactHandler = (id) => {
  const newContactList = contacts.filter((contact) =>{
    return contact.id !== id;
  })
  setContacts(newContactList);
 }
 
 useEffect(()=>{
  if(retrieveContacts) setContacts(retrieveContacts);
 },[]);

 useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
 },[contacts]);

  return (
    <div className="App">
      <Header></Header>
      <AddContact addContactHandler={addContactHandler}></AddContact>
      <ContactList contacts={contacts} getContactId={removeContactHandler}></ContactList>
    </div>
  );
}

export default App;
