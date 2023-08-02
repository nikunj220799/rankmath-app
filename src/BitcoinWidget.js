import React, { useState } from 'react';
import { Dribbble } from 'react-feather';
import { ChevronDown} from 'react-feather';
import './BitcoinWidget.css';

const BitcoinWidget = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="bitcoin-widget">
      <div className="top">
        <div className="logo-name">
          <Dribbble />
          <p>Nikcoin</p>
        </div>
        <div className="short-name">NKC</div>
      </div>
      <div className="middle">
        <h2>3.696969 NKC</h2>
      </div>
      <div className="bottom">
        <div className="current-value">$69,153 USD</div>
        <div className="profit-box">+3.23%</div>
      </div>
      <div className="dropdown-button" onClick={toggleDropdown}>
        <ChevronDown />
        </div>
        {showDropdown && (
        <div className="dropdown-content">
          <button className="buy-button">BUY</button>
          <button className="sell-button">SELL</button>
        </div>
      )}
    </div>
  );
};

export default BitcoinWidget;
