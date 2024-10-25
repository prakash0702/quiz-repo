import React, { useState, useEffect } from 'react';

const QuizPage = ({ category, onFinishQuiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);

  const currentQuestion = category.questions[currentQuestionIndex];

  /**
   *  check the timer and redirect to next question if timer is finished
   */
  useEffect(() => {
    if (timer === 0) {
      handleNext();
    } else {
      const countdown = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  /**
   * Handle event of answer selection
   * @param {*} answer 
   */
  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    if (answer.split('.')[0] === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  /**
   * Navigate to next page
   */
  const handleNext = () => {
    setSelectedAnswer(null);
    setTimer(10);

    if (currentQuestionIndex < category.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onFinishQuiz(score, category.questions.length);
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-2xl font-bold mb-4 absolute top-4 left-4">{category.name}</h2>
      <div className="p-6 rounded-lg w- ">
        <h3 className="font-semibold mb-4 normal-case">{currentQuestion.question}</h3>
        <div className="grid gap-2">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => (!selectedAnswer && option !== selectedAnswer) && handleAnswerSelect(option)}
              className={`px-4 py-2 border rounded ${selectedAnswer === option ?
                  (option.split('.')[0] === currentQuestion.correctAnswer ? 'bg-green-600' : 'bg-red-600')
                  : 'hover:bg-teal-200'
                }`}
            >
              {option}
            </button>
          ))}
          <p className="mb-4 text-right">Time Remaining: {timer}s</p>
        </div>
      </div>
      <button
        onClick={handleNext}
        className="mt-6 px-12 py-3 bg-teal-400 text-white rounded hover:bg-teal-700"
      >
        Next
      </button>
    </div>
  );
};

export default QuizPage;