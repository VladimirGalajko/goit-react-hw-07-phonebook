import { Button, Form, Input } from './FormAddContact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAction } from 'store/contactListSlise/contactListSlise';

export const FormAddContact = () => {
  const { contacts } = useSelector(state => state.contacts);
  console.log('contacts', contacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    if (contacts.some(({ name }) => name === e.target.elements.name.value)) {
      return alert(`${e.target.elements.name.value} is already in contacts`);
    }

    dispatch(addContactAction({ name, number }));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>Name</label>

      <Input
        type="text"
        id="inputName"
        name="name"
        placeholder="text"
        value={contacts.name}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Text"
        required
      />

      <label>Number</label>

      <Input
        type="tel"
        id="inputNumber"
        name="number"
        placeholder="number"
        value={contacts.number}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Numbers"
        required
      />

      <Button type="submit">add contact 👆</Button>
    </Form>
  );
};

export default FormAddContact;
