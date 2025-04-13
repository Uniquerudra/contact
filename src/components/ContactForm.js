import React, { useState } from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import CheckBox from './CheckBox';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isRobot, setIsRobot] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ name, email, message, isRobot });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <TextInput label="Name" placeholder="Full Name" value={name} onChange={setName} />
      <TextInput label="Email" placeholder="Email Address" value={email} onChange={setEmail} />
      <TextArea label="Message" placeholder="Your Message Here" value={message} onChange={setMessage} />
      <CheckBox label="I'm not a robot" checked={isRobot} onChange={setIsRobot} />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;