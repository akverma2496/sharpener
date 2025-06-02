import React, { createContext, useEffect, useState } from 'react'

export const ExpenseContext = createContext({})

const ExpenseProvider = (props) => {

    const [allExpenses, setAllExpenses] = useState({})

    useEffect(() => {

        async function fetchExpenses() {
            try {
                const response = await fetch(`https://expense-tracker-cb823-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json`)
                const data = await response.json();
                setAllExpenses(data)
            }
            catch (err) {
            }
        }
        fetchExpenses()
    }, [])

    const expenseData = {
        allExpenses : allExpenses,
        setAllExpenses: setAllExpenses
    }

    return (
        <ExpenseContext.Provider value={expenseData}>
            {props.children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseProvider