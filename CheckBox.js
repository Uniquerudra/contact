import React from 'react';

const CheckBox = ({ label, checked, onChange }) => {
  return (
    <div className="check-box">
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        {label}
      </label>
    </div>
  );
};

export default CheckBox;