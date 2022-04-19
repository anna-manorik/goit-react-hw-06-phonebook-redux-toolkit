import React from 'react';
import PropTypes from 'prop-types';
import actions from '../../redux/phonebook-action';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const filterValue = useSelector(state => state.filterReduser);
  const dispatch = useDispatch();

  const changeFilter = e => dispatch(actions.changeFilter(e.target.value));

  return (
    <label>
      Search:
      <input type="text" value={filterValue} onChange={changeFilter} />
    </label>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string,
  changeFilter: PropTypes.func,
};

export default Filter;
