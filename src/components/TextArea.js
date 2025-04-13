import React from 'react';

const TextArea = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="text-area">
      <label>{label}</label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextArea;