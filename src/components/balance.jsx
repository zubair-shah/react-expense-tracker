import React, {useContext} from 'react';
 import {GlobalContext} from './context/GlobalState'

const Balance = () => {
     const { transactions } = useContext(GlobalContext);

    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);
    const balance = transactionAmounts.reduce((acc, item ) => (acc += item), 0).toFixed(2);
    return (
        <div>
            <div className="main">


                <div className="balance">
                    <span>Your Balance</span>
                    <br />
                    <h2>{balance}</h2>

                </div>
            
            </div>
        </div>
    )
}
export default Balance;