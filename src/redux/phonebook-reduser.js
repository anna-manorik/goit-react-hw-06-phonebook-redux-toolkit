import { configureStore, createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-action';
import shortid from 'shortid';

const contactReduser = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    const checkname = state.find(contact =>
      contact.name.toLowerCase().includes(payload.name.toLowerCase())
    );

    if (!checkname) {
      const contact = {
        id: shortid.generate(),
        name: payload.name,
        number: payload.number,
      };

      return [contact, ...state];
    } else {
      alert(payload.name + ' is already in contact list');
    }
  },
  [actions.deleteContact]: (state, { payload }) => {
    return state.filter(contact => contact.id !== payload);
  },
});

const filterReduser = createReducer('', {
  [actions.changeFilter]: (state, { payload }) => {
    return payload;
  },
});

const store = configureStore({
  reducer: {
    contactReduser,
    filterReduser,
  },
});

export default store;
