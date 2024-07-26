import React from "react";

const FilterButtons = ({ handleFilterChange, filterType }) => {
  return (
    <div className="Filtering-buttons">
      <button
        className="All-button"
        onClick={() => handleFilterChange("all")}
        style={{ fontWeight: filterType === "all" ? "bold" : "normal" }}
      >
        All
      </button>
      <button
        className="Completed-button"
        onClick={() => handleFilterChange("completed")}
        style={{ fontWeight: filterType === "completed" ? "bold" : "normal" }}
      >
        Completed
      </button>
      <button
        className="Not-completed-button"
        onClick={() => handleFilterChange("active")}
        style={{ fontWeight: filterType === "active" ? "bold" : "normal" }}
      >
        Not Completed
      </button>
    </div>
  );
};

export default FilterButtons;
