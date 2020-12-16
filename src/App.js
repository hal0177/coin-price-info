import React from 'react';
import Coin, { Head } from "./components/Coin";

function App() {
  return (
    <>
      <div>
        <Head />
      </div>
      <div className="container">
        <table className="coin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Ticker</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <Coin name="Bitcoin" ticker="BTC" />
            <Coin name="Ethereum" ticker="ETH" />
            <Coin name="Fusion" ticker="FSN" />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
