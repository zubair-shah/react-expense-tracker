import React, { useContext } from 'react'
import {GlobalContext} from './context/GlobalState'


export const AccountSummary = () => {
    const  { transactions } = useContext(GlobalContext);
    
    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);

    const income = transactionAmounts
    .filter(transaction => transaction > 0)
    .reduce((acc, transaction) => (acc += transaction), 0)
    .toFixed(2);

    const expense = Math.abs(transactionAmounts
    .filter(transaction => transaction < 0)
    .reduce((acc, transaction) => (acc += transaction), 0)
    .toFixed(2));


    return (
        <div className="income-expense-box">

            <div className="expense-box">
                <span>Your Income</span>
                <br />
                <h2>{income}</h2>
            </div>
            <span className="line-seperator">
            </span>
            <div className="expense-box">
                <span>Your Expense</span>
                <br />
                <h2>{expense}</h2>
            </div>
        </div>
    )
}

export default AccountSummary;

