import React from 'react';

const axios = require('axios');

var coinInfo = [
  {
    coin: 'BTC',
    base: 'USDT',
    name: 'bitcoin',
    exchange: 'binance',
    url: 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT',
    price: null,
  },
  {
    coin: 'ETH',
    base: 'USDT',
    name: 'ethereum',
    exchange: 'binance',
    url: 'https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT',
    price: null,
  },
  {
    coin: 'FSN',
    base: 'USDT',
    name: 'fusion',
    exchange: 'huobipro',
    url: 'https://api.huobi.pro/market/history/trade?symbol=fsnusdt&size=1',
    price: null,
  },
];

export default class CoinData extends React.Component {
  constructor(props) {
    super(props);

    var coins = ['bitcoin', 'ethereum', 'fusion'];
    var coin = coinInfo[coins.indexOf(this.props.coin)];

    this.state = {
      exchange: coin.exchange,
      price: coin.price,
      url: coin.url,
    };
  }

  componentDidMount() {
    const getPrices = async () => {

      if(this.state.exchange === 'binance'){
        console.log('binance get');
        const coinPrice = await axios
        .get(this.state.url)
        .then(spot => {
          this.state.price = spot.data.price;
        })
        .catch(error => {
          console.log(this.state.exchange + ': ' + error.message);
        });
        this.setState({ coinPrice });
      
      }else if(this.state.exchange === 'huobipro'){
        console.log('fusion get')
        const coinPrice = await axios
        .get(this.state.url)
        .then(spot => {
          this.state.price = spot.data.data[0].data[0].price;
        })
        .catch(error => {
          console.log(this.state.exchange + ': ' + error.message);
        });
        this.setState({ coinPrice });
      }
    }
    setInterval(getPrices, 1000);
  }

  render() {
    return(
      <>
        { this.state.price }
      </>
    );
  }
}