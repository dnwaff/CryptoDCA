import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import React, {useState} from 'react';

import MainHeader from './ui/components/Header/MainHeader'
import CalcView from './ui/views/CalcView'
import PortfolioCardView from './ui/views/PortfolioCardView'
import StockChart from './ui/views/StockChart'


function App() {
  const title = 'Crypto DCA';
  return (
    
    <div className="app-body">
      <div style={{marginBottom: '100px'}}>
        <MainHeader title = {title}/>
      </div>
      <div>
        <CalcView/>
      </div>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>

    </div>
  );
}

export default App;
