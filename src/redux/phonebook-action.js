export const addContact = (name, number) => ({
  type: 'ADD_CONTACT',
  payload: {
    name: name,
    number: number,
  },
});

export const deleteContact = id => ({
  type: 'DELETE_CONTACT',
  payload: id,
});

export const changeFilter = value => ({
  type: 'CHANGE_FILTER',
  payload: value,
});
