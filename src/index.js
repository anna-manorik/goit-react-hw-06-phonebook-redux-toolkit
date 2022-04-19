import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import stores from './redux/phonebook-reduser';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={stores.store}>
      <PersistGate loading={null} persistor={stores.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
