import React, { useState } from "react";

const FilterableList = () => {
  const [category, setCategory] = useState(""); // State for selected category
  const [searchText, setSearchText] = useState(""); // State for search text

  // Sample list of items
  const items = [
    { id: 1, name: "Apple", category: "Fruits" },
    { id: 2, name: "Carrot", category: "Vegetables" },
    { id: 3, name: "Banana", category: "Fruits" },
    { id: 4, name: "Broccoli", category: "Vegetables" },
    { id: 5, name: "Chicken", category: "Meat" },
  ];

  // Handle dropdown category change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // Handle search text change
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  // Filter items based on category and search text
  const filteredItems = items.filter((item) => {
    const matchesCategory = category ? item.category === category : true;
    const matchesSearchText = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return matchesCategory && matchesSearchText;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Filterable List</h1>

      {/* Select box for category filter */}
      <select value={category} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Meat">Meat</option>
      </select>

      {/* Text box for search filter */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchText}
        onChange={handleSearchChange}
        style={{ marginLeft: "10px", padding: "5px" }}
      />

      {/* Render filtered list */}
      <ul style={{ marginTop: "20px" }}>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} - <i>{item.category}</i>
          </li>
        ))}
      </ul>

      {/* Show message if no items match the filter */}
      {filteredItems.length === 0 && <p>No items found.</p>}
    </div>
  );
};

export default FilterableList;
