import React from "react";

function CategoryFilter({ categories, handleCategoryChange, selectedCategories }) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button 
        key={category}
        className={selectedCategories === category ? "selected" : ""}
        onClick={() => handleCategoryChange(category)}
        >
        {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
