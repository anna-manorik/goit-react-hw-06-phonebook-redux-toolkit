import React, { useState, useEffect } from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import NameList from './NameList/NameList';

export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter />
      <NameList />
    </>
  );
}
