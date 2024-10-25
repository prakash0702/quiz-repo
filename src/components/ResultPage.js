import React from 'react';

const ResultPage = ({ score, totalQuestions }) => {
  const feedback = score / totalQuestions >= 0.7 ? "Great job!" : "Keep practicing!";

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">Quiz Complete</h1>
      <p className="text-2xl mb-4">Score: {score} / {totalQuestions}</p>
      <p className="text-xl">{feedback}</p>
    </div>
  );
};

export default ResultPage;