
import './Coin.css';
import Coin, { Head } from './Coin';

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
            <Coin coin={['bitcoin', 'ethereum', 'fusion']} ticker={['BTC', 'ETH', 'FSN']} />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
