
const axios = require('axios');

var coinPriceInit = [
  {
    coin: 'FSN',
    base: 'USDT',
    exchange: 'huobipro',
    url: 'https://api.huobi.pro/market/history/trade?symbol=fsnusdt&size=1',
    price: null,
  },
  {
    coin: 'BTC',
    base: 'USDT',
    exchange: 'binance',
    url: 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT',
    price: null,
  },
  {
    coin: 'ETH',
    base: 'USDT',
    exchange: 'binance',
    url: 'https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT',
    price: null,
  },
];

export default function CoinData(props){
  var coinInfo;
  
  const getPrices = async () => {
    if(props.coinName === 'Fusion'){
      coinInfo = coinPriceInit[0];
      await axios
      .get(coinInfo.url)
      .then(spot => {
        coinInfo.price = spot.data.data[0].data[0].price;
      })
      .catch(error => {
        console.error('Huobi: ' + error.message);
      });
    }
    else if(props.coinName === 'Bitcoin'){
      coinInfo = coinPriceInit[1];
      await axios
      .get(coinInfo.url)
      .then(spot => {
        coinInfo.price = spot.data.price;
      })
      .catch(error => {
        console.error('Binance: ' + error.message);
      });
    }
    else if(props.coinName === 'Ethereum'){
      coinInfo = coinPriceInit[2];
      await axios
      .get(coinInfo.url)
      .then(spot => {
        coinInfo.price = spot.data.price;
      })
      .catch(error => {
        console.error('Binance: ' + error.message);
      });
    }
  }

  getPrices();

  return(
    <>
      {coinInfo.price}
    </>
  );
}
