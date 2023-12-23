import "./css/Home.css";
import React, { useState } from "react";
import QuestionSlide from "./components/QuestionSlide";
import LoadingScreen from "./components/LoadingScreen";
import axios from "axios";

function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState();
  const [submit, setSubmit] = useState(false);
  const [apiData, setApiData] = useState();
  const questions = [
    {
      question: "What is your race?",
      key: "race",
    },
    {
      question: "What are your hobbies?",
      key: "hobbies",
    },
    {
      question: "What is your gender?",
      key: "gender",
    },
  ];

  const handleSaveAnswer = (answer) => {
    answers[questions[currentQuestion].key] = answer;

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setLoading(true);
      fetchData();
    }
  };

  const getGift = () => {
    // JSON.parse(apiData.data.result)

    const regex = /{[^{}]*}/g;
    const matches = apiData.data.result.match(regex);
    let tempGifts = [];
    let finalGifts = [];
    matches.forEach((match) => {
      tempGifts.push(JSON.parse(match));
    });
    console.log(tempGifts);
    tempGifts.forEach((gift) => {
      let tempGiftObject = {};
      Object.keys(gift).forEach((giftKey) => {
        if (giftKey.includes("gift")) {
          tempGiftObject["giftName"] = gift[giftKey];
        } else if (giftKey.includes("description")) {
          tempGiftObject["description"] = gift[giftKey];
        } else if (giftKey.includes("price")) {
          tempGiftObject["priceRange"] = gift[giftKey];
        }
      });
      finalGifts.push(tempGiftObject);
    });
    return finalGifts;
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion !== 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSubmit(false);
    setAnswers([]);
  };

  const fetchData = () => {
    axios
      .post("http://localhost:9000/openai/askideas ", answers)
      .then((res) => {
        console.log(res);
        setApiData(res);
        setSubmit(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  function ResponseView() {
    return (
      <div className="text-center pt-4">
        <ul className="flex flex-col w-full container items-center mx-auto">
          {getGift().map((item, id) => (
            <li
              key={id}
              className="w-[700px] bg-white shadow-md rounded-lg p-8 transition transform hover:scale-105 my-4"
            >
              <div className="text-left text-lg font-bold mb-4">
                {item.giftName}
                <span className="text-sm italic font-normal ml-4">
                  {item.priceRange}
                </span>
              </div>
              <div className="text-left text-sm">{item.description}</div>
            </li>
          ))}
        </ul>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 my-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={handleRestart}
        >
          Restart
        </button>
      </div>
    );
  }

  return (
    <div className="Home">
      <div className="h-full pt-24 px-16 max-w-5xl mx-auto text-center">
        <h1 className="text-brand-primary text-4xl sm:text-6xl">
          Find the perfect gift for any friend or family through the power of AI
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-brand-secondary max-w-2xl mx-auto">
          Input some info about the recipient of the gift. Such as hobbies,
          interests, age, and gender. Add any additional prompt to customize the
          gift as much as possible
        </p>
      </div>
      <div>
        {loading && <LoadingScreen />}

        {!loading && submit && <ResponseView />}

        {!loading && !submit && (
          <div className="flex justify-center container mx-auto">
            <QuestionSlide
              question={questions[currentQuestion].question}
              currentQuestion={currentQuestion + 1}
              totalQuestions={questions.length}
              onSave={handleSaveAnswer}
              onPrevious={handlePreviousQuestion}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
