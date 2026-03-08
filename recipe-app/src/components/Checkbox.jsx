import React, { useState } from 'react';

const Checkbox = ({ label, initialChecked}) => {
  // Manage the checked state with useState
  const [isChecked, setIsChecked] = useState(initialChecked || false);

  // Handle the change event
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          checked={isChecked} // 'checked' prop makes it a controlled component
          onChange={handleOnChange} // 'onChange' handler updates the state
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;