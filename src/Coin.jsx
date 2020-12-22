import React from 'react';
import './Coin.css';
import CoinData from './CoinData';
import icon from './gorilla.png';

export default function Coin(props){

  return(
    <>
      <tr className="coin-row">
        <td>{ props.coin[0] }</td>
        <td>{ props.ticker[0] }</td>
        <td>$<CoinData coin={ props.coin[0] } /></td>
      </tr>
      <tr className="coin-row">
        <td>{ props.coin[1] }</td>
        <td>{ props.ticker[1] }</td>
        <td>$<CoinData coin={ props.coin[1] } /></td>
      </tr>
      <tr className="coin-row">
        <td>{ props.coin[2] }</td>
        <td>{ props.ticker[2] }</td>
        <td>$<CoinData coin={ props.coin[2] } /></td>
      </tr>
    </>
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