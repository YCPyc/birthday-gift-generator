import React, { useState } from 'react';
import {ArrowLeft, ArrowRight} from '../helpers/Icons';

const QuestionSlide = ({ question, currentQuestion, totalQuestions, onSave, onPrevious }) => {
  const [textInput, setTextInput] = useState('');

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSave = () => {
    onSave(textInput);
    setTextInput('');
  };

  const handlePrevious = () => {
    onPrevious(textInput);
    setTextInput('');
  };


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // If the "Enter" key is pressed, submit the input
      handleSave();
    }
  };

  const progressBarWidth = ((currentQuestion) / (totalQuestions)) * 100 + '%';
  // Define CSS styles for the progress bar
  const progressBarStyles = {
    width: progressBarWidth,
    transition: 'width 2s ease', // Add a smooth transition
  };

  return (
    <div className="p-8 container flex flex-col justify-center">
      <div className="relative my-4 h-2 bg-gray-300 rounded-full">
        <div
          className="absolute top-0 h-2 bg-blue-500 rounded-full"
          style={progressBarStyles}
        ></div>
      </div>
      <h2 className="text-2xl mb-4">{question}</h2>
      <div className="flex">
        <input
          className="w-full py-2 px-4 bg-brand-primary rounded-lg border-2 border-brand-primary focus:outline-none focus:border-blue-500 shadow-lg text-white placeholder-white placeholder-opacity-50"
          type="text"
          placeholder="Type your answer here"
          value={textInput}
          onChange={handleTextInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className='flex mt-4 w-full justify-between'>
        <button className={currentQuestion !== 1 ? "Button-primary mr-auto" : "hidden"} onClick={handlePrevious}>
          <ArrowLeft></ArrowLeft>
        </button>
        <button className='Button-primary ml-auto' onClick={handleSave}>
          {currentQuestion !== totalQuestions ? <ArrowRight></ArrowRight> : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default QuestionSlide;