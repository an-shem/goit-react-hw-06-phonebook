import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/action';

import { FilterTitle, FilterInput } from './Filter.styled';

export default function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <div>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        filter={filter}
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={e => dispatch(filterContact(e.target.value))}
      />
    </div>
  );
}
