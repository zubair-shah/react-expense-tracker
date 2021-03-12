import React, { useContext } from 'react';
 import { GlobalContext } from '../components/context/GlobalState';
 import {Transaction} from './Transaction'


 export const TransactionHistory = () =>{

    const { transactions } = useContext(GlobalContext);
    console.log(transactions)
     return(
         <div>
             <div className="main-history">
             <h3 className="text-center">Transaction History</h3>
             <hr/>
              <div className="history-list">
                 <ul>
                       {transactions.map( transaction =>(
                           <Transaction key={transaction.id} transaction={transaction} />
                       ))}
                      {/* <li className="income-expense-box"> <h2>Salary</h2> <p className="money plus">+$300</p> <button className="delet-btn">X</button></li>
                      <li className="income-expense-box"> <h2>Water</h2> <p className="money minus">-$100</p> <button className="delet-btn">X</button></li>
                      <li className="income-expense-box"> <h2>Electric City</h2> <p className="money minus">-$23</p> <button className="delet-btn">X</button></li> */}
                  </ul>
              </div>
             </div>
           

         </div>
     )
}
// {/* //                      
// //                      Transaction.map(transaction =>
// //                          (
// //                             // <li key={ind} className="income-expense-box"> <h2>{transObj.desc}</h2> <p className="money plus">{transObj.amount}</p> <button className="delet-btn">X</button></li>
// //                               <Transaction key={transaction.id} transaction = {transaction} />
// //                          )
// //                      )} */}