
import AddContact from './AddContact';
import ContactList from './ContactList';
import Header from './Header';
function App() {

  const contacts = [

    { id: '1', 
    name: 'Tavant', 
    email: 'tavant@gmail.com' 
  },
  { id: '2', 
  name: 'ABC', 
  email: 'abc@gmail.com' 
}
]
  return (
    <div className="App">
      <Header></Header>
      <AddContact></AddContact>
      <ContactList contacts={contacts}></ContactList>
    </div>
  );
}

export default App;
