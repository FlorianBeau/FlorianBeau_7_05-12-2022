import React, { useState } from 'react';
import "../styles/styleDropdownMenu.scss";
import Product from '../pages/Product';
import "../styles/styleProduct.scss"

const DropdownLeft = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLeft = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleLeft}>Left Button</button>
      {isOpen && (
<h1>        YOYO
</h1>        // <h3 className="titleFlexDiv ">Description</h3>
        //           <ul className="description">
        //             <p className="redText">{offer.description}</p>
        //           </ul>
      )}
    </div>
  );
};

export default DropdownLeft;