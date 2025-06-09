import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthProvider'

export const ExpenseContext = createContext({})

const ExpenseProvider = (props) => {

    const [allExpenses, setAllExpenses] = useState({})
    const {userId} = useContext(AuthContext)

    useEffect(() => {

        if(!userId) return

        async function fetchExpenses() {
            try {
                const response = await fetch(`https://expense-tracker-cb823-default-rtdb.asia-southeast1.firebasedatabase.app/expenses/${userId}.json`)
                const data = await response.json();
                setAllExpenses(data || {})
            }
            catch (err) {}
        }
        fetchExpenses()
    }, [userId])

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