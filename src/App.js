import React from 'react';
import MobileHeader from './MobileHeader';
import BitcoinWidget from './BitcoinWidget';
import CryptoDashboard from './CryptoDashboard.js';
import WidgetButton from './WidgetButton.js';
import Footer from './Footer.js';
import './App.css'; // You can create this CSS file to style the entire app

const App = () => {
  return (
    <div className="app">
      <MobileHeader />
      <div className="contentApp">
      <BitcoinWidget />
      <CryptoDashboard />
      <WidgetButton />
      </div>
      <Footer />
    </div>
  );
};

export default App;
