// DropdownMenu.js
import React from 'react';
import './DropdownMenu.css';

const DropdownMenu = ({ isOpen, options }) => {
  return (
    <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
      {options.map((option) => (
        <div className={`option ${option.isRemove ? 'remove-option' : ''}`} key={option.text} onClick={option.onClick}>
          <div className="option-text">
            {option.text}
          </div>
          <div className={`option-logo ${option.isRemove ? 'red' : ''}`}>
            {option.logo} {/* Replace 'Logo' with your actual logo component */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
