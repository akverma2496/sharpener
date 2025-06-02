import ExpenseForm from "./ExpenseForm"
import AllExpenses from "./AllExpenses"
import { useEffect, useState } from "react"

const MainView = () => {

  return (
    <>
    <ExpenseForm />
    <AllExpenses />
    </>
  )
}

export default MainView