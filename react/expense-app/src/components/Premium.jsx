import PremiumButton from './PremiumButton'
import { Button } from 'react-bootstrap'
import { uiActions } from '../store/ui-slice'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useState } from 'react'
const database = import.meta.env.VITE_DATABASE_KEY
import { expenseActions } from '../store/expense-slice'

const Premium = () => {

    const expenses = useSelector(state => state.expense)
    const theme = useSelector((state) => state.ui.theme);
    const localId = useSelector(state => state.auth.localId)
    const dispatch = useDispatch()

    const activate = async () => {

        try {
              const response = await fetch(`${database}/${localId}.json`, {
                method: "PUT",
                body: JSON.stringify({...expenses, activated: true}),
                headers: { "Content-Type": "application/json" }
              })
        
              if (!response.ok) {
                const { error } = await response.json();
                throw new Error(error.message)
              }
              else {
                const data = await response.json()
                localStorage.setItem("activated", true)
                dispatch(expenseActions.activatePremium(true))
              }
        
            }
            catch (error) { toast.error(error.message) }
    }

    const downloadCSV = () => {

        const all = Object.values(expenses.allExpenses);

        if (all.length === 0) return

        const headers = ['Amount', 'Description', 'Category', 'Date'];
        const rows = all.map(e => [
            e.amount,
            `"${e.description}"`,
            e.category,
            e.date,
        ]);

        const csvContent = [
            headers.join(','),
            ...rows.map(row => row.join(',')),
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'expenses.csv';
        link.click();

        URL.revokeObjectURL(url);
    }

    return (
        <>
            {
                 !expenses.activated ? <PremiumButton onClick={activate} /> :
                    <>
                        <Button
                            variant="outline-primary"
                            className="me-2"
                            onClick={() => dispatch(uiActions.toggleTheme())}
                        >
                            {theme === "light" ? "🌙" : "☀️"}
                        </Button>

                        <Button onClick={downloadCSV}>Download CSV</Button>
                    </>


            }

        </>
    )
}

export default Premium