import { useEffect, useState } from 'react'
import Expense from './Expense'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { expenseActions } from '../store/expense-slice'
const database = import.meta.env.VITE_DATABASE_KEY


const AllExpenses = () => {

    const dispatch = useDispatch()
    const localId = useSelector(state => state.auth.localId)
    const allExpenses = useSelector(state => state.expense.allExpenses) || {}
    const totalExpenseAmount = useSelector(state => state.expense.totalExpenseAmount) || 0
    const [loading, setLoading]  = useState(true)

    useEffect(() => {

        const fetchExpenses = async () => {
            const response = await fetch(`${database}/${localId}.json`)

            if (!response.ok) {
                const { error } = await response.json()
                toast.error("Fetching expenses failed")
            }
            else {
                const data = await response.json();
                localStorage.setItem("activated", data?.activated || false)
                dispatch(expenseActions.setExpenses(data))
            }
            setLoading(false)
        }
        fetchExpenses()
    }, [])

    return (
        <Row className="justify-content-center gx-3 gy-4" style={{ width: "90%", margin: "auto", paddingBottom: "10px" }}>
            {
                
                loading ? <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "80vh" }}>Loading...</h2>
                :
                (
                totalExpenseAmount ?

                    Object.entries(allExpenses).map(([key, value]) => {
                        return <Col key={value.id} xs={10} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                            <Expense id={value.id} item={value} />
                        </Col>
                    })

                    :

                    <Col xs={12} className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
                        <h3 className="text-center">You have 0 expense right now</h3>
                    </Col>)
            }
        </Row>
    )
}

export default AllExpenses