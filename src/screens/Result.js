import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
  const totalScore = useSelector((state) => state.score);
  let riskProfile = "";

  if (totalScore <= 5) {
    riskProfile = "Low Risk";
  } else if (totalScore <= 10) {
    riskProfile = "Medium Risk";
  } else {
    riskProfile = "High Risk";
  }

  return (
    <div className="result">
      <h2>Your Risk Profile Score: {totalScore}</h2>
      <h3>Risk Profile Category: {riskProfile}</h3>
    </div>
  );
};

export default Result;
