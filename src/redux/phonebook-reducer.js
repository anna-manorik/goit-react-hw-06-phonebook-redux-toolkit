import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './phonebook-action';
import shortid from 'shortid';

const contactReduser = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    const contact = {
      id: shortid.generate(),
      name: payload.name,
      number: payload.number,
    };

    return [contact, ...state];
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReduser = createReducer('', {
  [actions.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  contactReduser,
  filterReduser,
});
