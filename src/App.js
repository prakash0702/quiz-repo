import React, { useState } from 'react';
import CategorySelection from './components/CategorySelection';
import { quizData } from './data';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';

function App() {
  const [stage, setStage] = useState('category');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  /**
   * Handle event of the category selections
   * @param {*} category 
   */
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setStage('quiz');
  };

  /**
   *  Set the final score and stage
   * @param {*} finalScore 
   * @param {*} total 
   */
  const handleFinishQuiz = (finalScore, total) => {
    setScore(finalScore);
    setTotalQuestions(total);
    setStage('result');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {stage === 'category' && (
        <CategorySelection
          categories={quizData.categories}
          onSelectCategory={handleSelectCategory}
        />
      )}
      {stage === 'quiz' && (
        <QuizPage
          category={selectedCategory}
          onFinishQuiz={handleFinishQuiz}
        />
      )}
       {stage === 'result' && (
        <ResultPage score={score} totalQuestions={totalQuestions} />
      )}
    </div>
  );
}

export default App;