import React from 'react';
import PropTypes from 'prop-types';
import actions from '../../redux/phonebook-action';
import { connect } from 'react-redux';

const Filter = ({ filterValue, changeFilter }) => (
  <label>
    Search:
    <input type="text" value={filterValue} onChange={changeFilter} />
  </label>
);

Filter.propTypes = {
  filterValue: PropTypes.string,
  changeFilter: PropTypes.func,
};

const mapStateToProps = state => ({
  filterValue: state.filterReduser,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: e => dispatch(actions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
