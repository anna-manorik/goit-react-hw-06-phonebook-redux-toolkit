import { createStore, combineReducers } from 'redux';
import shortid from 'shortid';

const contactReduser = (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_CONTACT': {
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

      break;
    }

    case 'DELETE_CONTACT': {
      return state.filter(contact => contact.id !== payload);
    }

    default:
      return state;
  }
};

const filterReduser = (state = '', { type, payload }) => {
  switch (type) {
    case 'CHANGE_FILTER':
      return payload;

    default:
      return state;
  }
};

const rootReduser = combineReducers({
  contactReduser,
  filterReduser,
});

const store = createStore(rootReduser);

export default store;
