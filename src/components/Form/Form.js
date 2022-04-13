import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './form.module.css';
import * as actions from '../../redux/phonebook-action';
import { connect } from 'react-redux';

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.log('any results');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(name, number);
    resetForm();

    e.currentTarget.elements.name.value = '';
    e.currentTarget.elements.number.value = '';
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Phone num:
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(actions.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(Form);
