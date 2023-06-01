import React, { useState } from 'react';
import "../styles/styleDropdownMenu.scss";
import "../styles/styleProduct.scss"

const DropdownRight = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleRight = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleRight}>Right button</button>
      {isOpen && (
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownRight;