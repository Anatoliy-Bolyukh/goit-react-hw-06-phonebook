import Notiflix from 'notiflix';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {createContacts} from '../redux/contactsSlice'


function App() {

  const contacts = useSelector(state => state.contacts)
  const dispatch = useDispatch()
  
  
  const handleSubmit = event => {
    event.preventDefault()

    const name = event.currentTarget.elements.name.value
    const number = event.currentTarget.elements.number.value
    

    const normalizedName = name.toLowerCase();
    
    const some = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    )
  
    if (some) {
      return Notiflix.Notify.failure(`${name}  is already in contacts`);

    }

    const dataContacts = {
      id: nanoid(),
      name,
      number,
    }

    dispatch(createContacts(dataContacts));

  }
  
      return (
        <div style={{
          display: "flex",
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          
          <h1>Phonebook</h1>
          <ContactForm
            handleSubmit={handleSubmit}
          />
          <h2>Contacts</h2>
          <Filter  /> 
          <ContactList/>
        </div>
      );
};

export default App;