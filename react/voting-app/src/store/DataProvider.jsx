import { useState, createContext, useEffect } from 'react'

export const DataContext = createContext()

const DataProvider = ({ children }) => {
    
    const [monitorData, setMonitorData] = useState({
        "Amar" : ["true"],
        "Akbar" : ["true"],
        "Anthony" : ["true"],
        "Amarinder" : ["true"]
    })

    useEffect(() => {

        const fetchData = async () => {
            try {
                const votingData = await fetch(`https://vote-app-7afce-default-rtdb.asia-southeast1.firebasedatabase.app/votingData.json`);
                const parsed = await votingData.json();
                
                if(parsed != null) setMonitorData(parsed)
                else{
                    await fetch(`https://vote-app-7afce-default-rtdb.asia-southeast1.firebasedatabase.app/votingData.json`, {
                        method: "PUT",
                        body: JSON.stringify(monitorData),
                        headers: { "Content-Type" : "application/json" }
                    })
                }  
            }
            catch(err){}
        }
        fetchData()

    }, [])

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