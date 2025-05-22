import { useState, createContext } from 'react'

export const DataContext = createContext()

const DataProvider = ({children}) => {

    const [monitorData, setMonitorData] = useState([
        {
            candidate: "Amar",
            votes: []
        },
        {
            candidate: "Akbar",
            votes: []
        },
        {
            candidate: "Anthony",
            votes: []

        },
        {
            candidate: "Amarinder",
            votes: []
        }
    ])

    const data = {
        monitorData: monitorData,
        setMonitorData: setMonitorData
    }

  return (
    <DataContext.Provider value={data}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider