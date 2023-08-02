// MobileHeader.js
import React, { useState } from 'react';
import './MobileHeader.css';
import { MoreVertical, ChevronLeft,Edit,Info,Share2,Delete } from 'react-feather';
import DropdownMenu from './DropdownMenu.js';

const MobileHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMoreClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    // Handle the click of each option here
    console.log('Option clicked:', option);
    setIsDropdownOpen(false); // Close the dropdown after option click
  };

  const dropdownOptions = [
    { text: 'Edit',logo:<Edit />, isRemove: false, onClick: () => handleOptionClick('Edit') },
    { text: 'Courier Info',logo:<Info />, isRemove: false, onClick: () => handleOptionClick('Courier Info') },
    { text: 'Share',logo:<Share2 />, isRemove: false, onClick: () => handleOptionClick('Share') },
    { text: 'Remove',logo:<Delete />, isRemove: true, onClick: () => handleOptionClick('Remove') },
  ];

  return (
    <header className="mobile-header">
      <div className="left">
        <ChevronLeft />
      </div>
      <div className="center">
        <h1>Nikcoin Wallet</h1>
      </div>
      {/* Attach the click event handler to the entire div */}
      <div className="right" onClick={handleMoreClick}>
        <MoreVertical />
      </div>
      <DropdownMenu isOpen={isDropdownOpen} options={dropdownOptions} />
    </header>
  );
};

export default MobileHeader;
