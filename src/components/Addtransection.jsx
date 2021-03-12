import React, {useState , useContext } from 'react';

import { GlobalContext } from  "./context/GlobalState"


export const AddTransaction = () =>{
    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext)
    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }
        addTransaction(newTransaction)
    }
    return(
        <div className="main-transection">
            <div className="form">
                <h2>Add New Transaction</h2>
                <form onSubmit={onSubmit}>
                    <label htmlFor="text">Text: <br/>
                        <input type="text" 
                         id="description" value={description}
                         onChange={(e) => setDescription(e.target.value)}
                           placeholder="Details of Transaction" required />
                    </label> 
                    <br/>
                    <label htmlFor="amount">Amount: <br/>
                    (negative-expense, positive - income) <br/>
                             <input type="number"
                              name="amount"
                                id="transactionamount"
                                 required placeholder="Dollar value of Amount"
                                 value={transactionAmount}
                                 onChange={(e) => setTransactionAmount(e.target.value)} />
                    </label>
            
                  <button className="btn"> Add Transaction</button>
                
                 
                </form>
            </div>

        </div>
    )
}