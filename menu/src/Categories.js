import React from "react";

const Categories = ({ Categories, filterItems }) => {
  return (
    <div className="btn-container">
      {Categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          ></button>
        );
      })}
    </div>
  );
};

export default Categories;
