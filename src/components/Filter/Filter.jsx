import PropTypes from 'prop-types';
import { FilterTitle, FilterInput } from './Filter.styled';

export default function Filter({ filter, handleChange }) {
  return (
    <div>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        filter={filter}
        type="text"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={handleChange}
      />
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
