import React, { useState } from 'react';

// Functional component for Checklist
const CheckList = () => {
  // State to keep track of checked items
  const [checkedItems, setCheckedItems] = useState({});

  // Function to handle checkbox change
  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  // Dummy list of options
  const options = [
    'Are You a Citizen :Yes',
    'Are You over 21 : No'
    
  ];

  return (
    <div>
      <h2>Checklist</h2>
      <form>
        {/* Render checkboxes dynamically */}
        {options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                name={option}
                checked={checkedItems[option] || false}
                onChange={handleChange}
              />
              {option}
            </label>
          </div>
        ))}
      </form>
      <div>
        <h3>Selected Options:</h3>
        {/* Display selected options */}
        <ul>
          {Object.keys(checkedItems).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckList;
