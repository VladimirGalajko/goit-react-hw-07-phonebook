import { GlobalStyle } from 'GlobalStyle';
import ContactList from 'components/ContactList';
import { Container } from 'components/Container/Container.styled';
import FormAddContact from 'components/FormAddContact';
import { Filter } from 'components/Filter';


export const App = () => {


  return (
    <Container>
      <h1>Phonebook 📱</h1>
      <FormAddContact  />
      <h2>Contacts</h2>
      <Filter/>
      <div>
        <ContactList  />
      </div>
      <GlobalStyle />
    </Container>
  );
};
