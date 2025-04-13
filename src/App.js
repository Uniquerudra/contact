import React from 'react';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <div className="app">
      <h1>Contact Us</h1>
      <p>If you have any queries, drop them here</p>
      <ContactForm />
    </div>
  );
};

export default App;