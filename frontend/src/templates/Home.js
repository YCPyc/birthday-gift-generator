import '../css/Home.css';
import React, { useState } from 'react';
import QuestionSlide from '../components/QuestionSlide';

function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const questions = [
    {
      question: 'What is your favorite sport?',
    },
    {
      question: 'What is your favorite memory?',
    },
    {
      question: 'How old are you?',
    },
  ];

  const handleSaveAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion('submit');
    }
  };

  const getGift = () => {
    return answers.join(' ');
  };

  const handleSkipQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion('submit');
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion !== 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
  };

  return (
    <div className="Home">
      <div className="h-full pt-24 max-w-5xl mx-auto text-center">
        <h1 className="text-brand-primary text-6xl">
          Find the perfect gift for any friend or family through the power of AI
        </h1>
        <p className="mt-6 text-lg text-brand-secondary max-w-2xl mx-auto">
          Input some info about the recipient of the gift. Such as hobbies, interests, age, and gender. Add any additional prompt to customize the gift as much as possible
        </p>
      </div>
      <div>
        {currentQuestion === 'submit' ? (
        <div className="text-center">
          <h2 className="text-4xl mb-4">Submit Answers</h2>
          <p className="text-xl mb-8">Sum of answers: {getGift()}</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={handleRestart}
          >
            Restart
          </button>
        </div>
        ) : (
          <div>
            <QuestionSlide
              question={questions[currentQuestion].question}
              onSave={handleSaveAnswer}
            />
            <div className='flex'>
              <button className='Button-primary' onClick={handlePreviousQuestion}>Previous</button>
              <button className='Button-primary' onClick={handleSkipQuestion}>Skip</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
