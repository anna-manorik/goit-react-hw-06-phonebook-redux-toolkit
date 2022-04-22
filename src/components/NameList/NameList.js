import React from 'react';
import PropTypes from 'prop-types';
import NameItem from '../NameItem/NameItem';
import styles from './nameList.module.css';
import actions from '../../redux/phonebook-action';
import { getVisibleContacts } from '../../redux/phonebook-selectors';
import { useSelector, useDispatch } from 'react-redux';

const NameList = () => {
  const visibleContacts = useSelector(state => getVisibleContacts(state));
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(actions.deleteContact(id));

  return (
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
};

NameList.propTypes = {
  visibleContacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default NameList;
