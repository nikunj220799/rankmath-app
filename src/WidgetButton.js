import React from 'react';
import './WidgetButton.css';
import { CheckSquare } from 'react-feather';
import { Slash} from 'react-feather';
const WidgetButton = () => {
  return (
    <div className="widget-container">
      <div className="crypto-widget">
        <div className="logo-container">
          <div className="logo-placeholder"><CheckSquare /></div>
        </div>
        <div className="action">Buy NKC</div>
      </div>
      <div className="crypto-widget">
        <div className="logo-container">
          <div className="logo-placeholder"><Slash /></div>
        </div>
        <div className="action">Sell NKC</div>
      </div>
    </div>
  );
};

export default WidgetButton;
