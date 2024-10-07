import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScore } from '../redux/actions';
import { useHistory } from 'react-router-dom';

const questions = [
  {
    question: "What is your investment goal?",
    options: [
      { answer: "Capital Preservation", score: 1 },
      { answer: "Moderate Growth", score: 2 },
      { answer: "Aggressive Growth", score: 3 },
    ],
  },
  {
    question: "What is your risk tolerance?",
    options: [
      { answer: "Low", score: 1 },
      { answer: "Medium", score: 2 },
      { answer: "High", score: 3 },
    ],
  },
  {
    question: "How long do you plan to invest?",
    options: [
      { answer: "Less than 1 year", score: 1 },
      { answer: "1 to 5 years", score: 2 },
      { answer: "More than 5 years", score: 3 },
    ],
  },
];

const Questionnaire = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleOptionClick = (score) => {
    dispatch(addScore(score));
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      history.push('/result');
    }
  };

  return (
    <div className="questionnaire">
      <h2>{questions[currentQuestionIndex].question}</h2>
      {questions[currentQuestionIndex].options.map((option, index) => (
        <button key={index} onClick={() => handleOptionClick(option.score)}>
          {option.answer}
        </button>
      ))}
    </div>
  );
};

export default Questionnaire;
