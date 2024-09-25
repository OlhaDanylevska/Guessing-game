import React from 'react';

function Input({ inputValue, setInputValue, onInputChange }) {
  const handleChange = (e) => {
    const value = e.target.value.toUpperCase();
    console.log("value", value)
    if (value.length === 1 && /^[A-Z ]$/.test(value)) {
      setInputValue(value);
      onInputChange(value);
    } else if (value.length === 0) {
      // Allow clearing the input
      setInputValue(value);
      onInputChange(value);
    }
  };

  return (
    <div>
      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
