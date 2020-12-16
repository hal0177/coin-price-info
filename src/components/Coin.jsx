import React, { useState } from 'react';
import './styles.css';
import CoinData from './CoinData';
import icon from '../img/gorilla.png';

export default function Coin(props){
  const [price, setPrice] = useState('');

  const callback = () => {
    if(props.name === 'Fusion'){
      setPrice(<CoinData coinName="Fusion" />);
    }else if(props.name === 'Bitcoin'){
      setPrice(<CoinData coinName="Bitcoin" />);
    }else if(props.name === 'Ethereum'){
      setPrice(<CoinData coinName="Ethereum" />);
    }
  }
  setInterval(callback, 1000);

  return(
    <tr className="coin-row">
      <td>{ props.name }</td>
      <td>{ props.ticker }</td>
      <td>${ price }</td>
    </tr>
  );
}

export function Head(){
  return(
    <div className="header">
      <img src={icon} alt="top icon" id="icon" />
      <h1>Coin Prices</h1>
    </div>
  );
}
