import PropTypes from 'prop-types';
import { Contact, Text, DeleteButton } from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slice-items';

export default function ContactItem({ contact: { name, number, id } }) {
  const dispatch = useDispatch();
  return (
    <Contact>
      <Text>
        - {name}: {number}
      </Text>
      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
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
