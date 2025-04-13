import React from 'react';

const TextInput = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="text-input">
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextInput;