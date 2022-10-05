
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/contactsSlice'

const ContactList = () => {
  const contacts = useSelector(state => state.contacts)
  const filter = useSelector(state => state.filter)

  const dispatch = useDispatch();
  
  const filterContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ul>
        {filterContacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
                <p>{name}: {number}</p>
                
            <button onClick={() =>{dispatch(deleteContacts(id))} }>delete</button>
          </li>
        )
        })}
      </ul>
    </div>
  );
};

export default ContactList;
