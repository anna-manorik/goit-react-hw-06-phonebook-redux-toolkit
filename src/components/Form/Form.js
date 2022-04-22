import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './form.module.css';
import actions from '../../redux/phonebook-action';
import { useDispatch } from 'react-redux';
import { store } from '../../redux/store';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

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

    const contactReduser = store.getState().rootReduser.contactReduser;
    console.log(contactReduser);

    const checkname = contactReduser.find(contact =>
      contact.name.toLowerCase().includes(e.currentTarget.elements.name.value.toLowerCase())
    );

    if (!checkname) {
      dispatch(actions.addContact({ name, number }));
      resetForm();

      e.currentTarget.elements.name.value = '';
      e.currentTarget.elements.number.value = '';
    } else {
      alert(e.currentTarget.elements.name.value + ' is already in contact list');
    }
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
};

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;
