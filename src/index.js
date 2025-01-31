import React from 'react';
import ReactDOM from 'react-dom/client'; // Importing from 'react-dom/client' for React 18
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './services/Reducers/index';

// Create Redux store
const store = createStore(rootReducer);
// console.warn("store data", store);

// Get the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
