import PropTypes from 'prop-types';
import { Contact, Text, DeleteButton } from './ContactItem.styled';

export default function ContactItem({
  onDeleteContact,
  contact: { name, number, id },
}) {
  return (
    <Contact>
      <Text>
        - {name}: {number}
      </Text>
      <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
        X
      </DeleteButton>
    </Contact>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
};
