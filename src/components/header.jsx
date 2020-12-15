import React, { Component } from 'react';
import './styles.css';
import CoinData from './Coins';

/* export function Head(props){
  return(
    <div>
      <img src={ props.icon } alt="header-icon" />
      <h1>title name</h1>
    </div>
  );
} */

var coin = new CoinData();

export default class Coin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: null,
    }
  }

  componentDidMount() {
    var callback = () => {
      coin.getCoinPrices();
      if(this.props.name == 'Fusion'){
        this.setState({price: coin.coinPriceLatest[0].price});
      }else if(this.props.name == 'Bitcoin'){
        this.setState({price: coin.coinPriceLatest[1].price});
      }else if(this.props.name == 'Ethereum'){
        this.setState({price: coin.coinPriceLatest[2].price});
      }
    }
    setInterval(callback, 3000);
  }

  render(){
    return(
      <tr className="coin-row">
        <td>{this.props.name}</td>
        <td>{this.props.ticker}</td>
        <td>${this.state.price}</td>
      </tr>
    );
  }
}

export function Head(props){
  return(
    <div className="header">
      <img src={ props.icon } alt="top icon" id="icon" />
      <h1>Coin-Exchange</h1>
    </div>
  );
}
