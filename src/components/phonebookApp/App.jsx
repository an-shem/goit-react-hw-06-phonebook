import { Toaster } from 'react-hot-toast';
import Card from '../Card';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

import { Container, Section, Title } from './App.styled';

export default function App() {
  return (
    <Card>
      <Container>
        <Section>
          <Title>Phonebook</Title>
          <ContactForm />
        </Section>
        <Section>
          <Title>Contacts</Title>
          <Filter />
          <ContactList />
        </Section>
        <Toaster />
      </Container>
    </Card>
  );
}
