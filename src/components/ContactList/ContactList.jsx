import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';

import { ListContact } from './ContactList.styled';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ListContact>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ListContact>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
