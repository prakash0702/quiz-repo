import React, { useState } from 'react';
import CategorySelection from './components/CategorySelection';
import { quizData } from './data';

function App() {
  const [stage, setStage] = useState('category');
  const [selectedCategory, setSelectedCategory] = useState(null);

  /**
   * Handle event of the category selections
   * @param {*} category 
   */
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {stage === 'category' && (
        <CategorySelection
          categories={quizData.categories}
          onSelectCategory={handleSelectCategory}
        />
      )}
    </div>
  );
}

export default App;