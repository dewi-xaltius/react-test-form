import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="inputField">Enter Text:</label>
      <input
        id="inputField"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
