import React, { useState } from 'react';

const QuestionSlide = ({ question, onSave }) => {
  const [textInput, setTextInput] = useState('');

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSave = () => {
    onSave(textInput);
    setTextInput('');
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">{question}</h2>
      <div className="flex">
        <input
          className="flex-grow bg-gray-700 text-white rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Type your answer here"
          value={textInput}
          onChange={handleTextInputChange}
        />
        <button
          className="Button-primary"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default QuestionSlide;