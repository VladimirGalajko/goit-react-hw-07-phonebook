import { useDispatch, useSelector } from 'react-redux';
import { Li } from './ContactsList.styled';
import { delContactAction } from 'store/contactListSlise/contactListSlise';

const ContactList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const value = useSelector(state => state.contacts.filter);
  let showContacts = contacts;
  if (value !== '') {
    showContacts = contacts.filter(el => el.name.toLowerCase().includes(value));
  }

  const delContacts = id => {
    dispatch(delContactAction(id));
  };

  return (
    <ul>
      {showContacts.map(({ name, number, id }) => {
        return (
          <Li key={id}>
            <span>{name}: </span>
            <span>{number} </span>
            <button
              type="button"
              onClick={() => {
                delContacts(id);
              }}
            >
              ❌
            </button>
          </Li>
        );
      })}
    </ul>
  );
};

export default ContactList;
