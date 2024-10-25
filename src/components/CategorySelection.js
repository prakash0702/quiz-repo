import React from 'react';

/**
 * 
 * @param categories onSelectCategory
 * @returns JSX (category buttons)
 */
const CategorySelection = ({ categories, onSelectCategory }) => {
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Select a Category</h1>
      <div className="grid gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category)}
            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection;