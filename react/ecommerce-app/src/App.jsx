import AllItems from './components/AllItems';
import MainHeader from './components/MainHeader';


function App() {

  return (
    <>
      <MainHeader />
      <h1 style={{textAlign: "center", padding: "1em", backgroundColor: "lightgray"}}>The Generics</h1>
      <h2 style={{textAlign: "center", padding: "1em"}}>Music</h2>
      <AllItems />
    </>
  )
}

export default App
