import React, { useState } from 'react';
import './styles.css';
import CoinData from './Coins';
import icon from '../img/gorilla.png';

var coin = new CoinData();

export default function Coin(props){
  const [price, setPrice] = useState('');

  const callback = () => {
    coin.getCoinPrices();
    if(props.name == 'Fusion'){
      setPrice(coin.coinPriceLatest[0].price);
    }else if(props.name == 'Bitcoin'){
      setPrice(coin.coinPriceLatest[1].price);
    }else if(props.name == 'Ethereum'){
      setPrice(coin.coinPriceLatest[2].price);
    }
  }
  setInterval(callback, 3000);

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
