import React, {useContext} from 'react';
import {GlobalContext} from './context/GlobalState'

export const  Transaction = ({ transaction }) => {
const {  delTransaction } = useContext(GlobalContext);

    const sign  = transaction.transactionAmount > 0 ? '+' : '-' ;
    const transactionType = transaction.transactionAmount > 0 ? 'plus'  : 'minus'
    
    return (
        <li 
         className="income-expense-box">
              <h2>{transaction.description}</h2> <p className="money plus">{sign}${Math.abs(transaction.transactionAmount)}</p>
               <button className="delet-btn" onClick={() => delTransaction(transaction.id)}>X</button></li>
    )
}