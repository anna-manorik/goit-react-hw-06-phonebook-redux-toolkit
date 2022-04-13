import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('ADD_CONTACT', (name, number) => {
  return {
    payload: {
      name: name,
      number: number,
    },
  };
});

const deleteContact = createAction('DELETE_CONTACT');

const changeFilter = createAction('CHANGE_FILTER');

export default { addContact, deleteContact, changeFilter };
