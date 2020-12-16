/**
 * Retrieve coin information from exchanges
 */

'use strict';

const axios = require('axios');

class CoinData {
  constructor() {
    console.log(' In Coins constructor');
    this.pubKey = null;
    this.coinPriceLatest = [
      {
        coin: 'FSN',
        base: 'USDT',
        exchange: 'huobipro',
        url: 'https://api.huobi.pro/market/history/trade?symbol=fsnusdt&size=1',
        price: null,
        statsDay: null,
        statsWeek: null,
        statsMonth: null,
        date: null,
        balance: null,
        balanceDecimals: 2,
        priceUSDDecimalPrecision: 3,
      },
      {
        coin: 'BTC',
        base: 'USDT',
        exchange: 'binance',
        url: 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT',
        price: null,
        statsDay: null,
        statsWeek: null,
        statsMonth: null,
        date: null,
        balance: null,
        balanceDecimals: 5,
        priceUSDDecimalPrecision: 0,
      },
      {
        coin: 'ETH',
        base: 'USDT',
        exchange: 'binance',
        url: 'https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT',
        price: null,
        statsDay: null,
        statsWeek: null,
        statsMonth: null,
        date: null,
        balance: null,
        balanceDecimals: 3,
        priceUSDDecimalPrecision: 2,
      },
    ];
  }

  getCoinPrices = async () => {
    //console.log('In getCoinPrices');
    for (var ii = 0; ii < this.coinPriceLatest.length; ii++) {
      var ticker = this.coinPriceLatest[ii];
      //console.log('In getCoinPrices, pubKey = ' + this.pubKey + ' coin = ' + ticker.coin);
      

      if (ticker.exchange === 'binance') {
        // e.g. {"symbol":"WPRBTC","price":"0.00000083"}
        await axios
          .get(ticker.url)
          .then(spot => {
            // console.log(ticker.exchange);
            // console.log(ticker.coin);
            // console.log(ticker.base);
            // console.log(spot.headers.date);
            // console.log(spot.data.price + '\n\n');
            ticker.price = spot.data.price;
            ticker.date = spot.headers.date;
            this.coinPriceLatest[ii].price = spot.data.price;
            this.coinPriceLatest[ii].date = spot.headers.date;
          })
          .catch(error => {
            console.log(
              'binance exchange error ' + ticker.coin + ' ' + error.message,
            );
          });
      } else if (ticker.exchange === 'huobipro') {
        // e.g. {"status":"ok","ch":"market.htusdt.trade.detail","ts":1584882667562,"data":[{"id":100855760426,"ts":1584882665766,"data":[{"amount":2.350000000000000000,"trade-id":100294501902,"ts":1584882665766,"id":10085576042676410392266,"price":3.233000000000000000,"direction":"sell"}]}]}
        await axios
          .get(ticker.url)
          .then(spot => {
            // console.log(ticker.exchange);
            // console.log(ticker.coin);
            // console.log(ticker.base);
            // console.log(spot.headers.date);
            // console.log(spot.data.data[0].data[0].price + '\n\n');
            this.coinPriceLatest[ii].price = spot.data.data[0].data[0].price;
            this.coinPriceLatest[ii].date = spot.headers.date;
          })
          .catch(error => {
            // console.log(
            //   'huobipro exchange error ' + ticker.coin + ' ' + error.message,
            // );
          });
      }
    }
  };
}

export default CoinData;
