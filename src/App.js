import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import AccountSummary from "./components/AccountSummary";
import { TransactionHistory } from "./components/TransactionHistory";
// import {Accounthistory} from './components/Accounthistory'
import { AddTransaction } from "./components/Addtransection";
// // import {TransactionContext} from './components/Transcontext'
import { GlobalProvider } from "./components/context/GlobalState";

function App() {
  return (
    <div>
      <GlobalProvider>
        <Header />
        <div className="container-main">
          <div className="main-box">
            <Balance />
            <AccountSummary />
            <TransactionHistory />
            <AddTransaction />
          </div>
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
