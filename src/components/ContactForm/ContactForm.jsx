import PropTypes from 'prop-types';

import { Form, Label, Input, LabelName, AddButton } from './ContactForm.styled';

export default function ContactForm({ onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;

    onSubmit(name, number);
    reset(e);
  };

  const reset = e => {
    e.target.name.value = '';
    e.target.number.value = '';
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <LabelName>Name</LabelName>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Label>
      <Label>
        <LabelName>Number</LabelName>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </Label>
      <AddButton type="submit">Add contact</AddButton>
    </Form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
