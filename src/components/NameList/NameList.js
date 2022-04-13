import React from 'react';
import PropTypes from 'prop-types';
import NameItem from '../NameItem/NameItem';
import styles from './nameList.module.css';
import actions from '../../redux/phonebook-action';
import { connect } from 'react-redux';

const NameList = ({ visibleContacts, onDeleteContact }) => (
  <ul className={styles.list}>
    {visibleContacts &&
      visibleContacts.map(({ id, name, number }) => (
        <NameItem
          id={id}
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      ))}
  </ul>
);

NameList.propTypes = {
  visibleContacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

const mapStateToProps = state => {
  const { contactReduser, filterReduser } = state;

  const visibleContacts = contactReduser.filter(contact =>
    contact.name.toLowerCase().includes(filterReduser.toLowerCase())
  );

  return {
    visibleContacts: visibleContacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NameList);
