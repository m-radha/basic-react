import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {
  const renderContactList = props.contacts.map((contact) =>{
    return(
        <ContactCard contact={contact}></ContactCard>
    )
  })
  return <div>
    Contact List
    {renderContactList}
  </div>
  }

export default ContactList
