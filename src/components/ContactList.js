import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {
  const deleteConatactHandler = (id) =>{
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) =>{
    return(
        <ContactCard contact={contact} clickHandler={deleteConatactHandler}></ContactCard>
    )
  })
  return <div>
    <b>Contact List</b>
    {renderContactList}
  </div>
  }

export default ContactList
