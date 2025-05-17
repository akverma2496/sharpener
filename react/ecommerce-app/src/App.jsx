import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './components/Store';
import Home from './components/Home';
import Layout from './components/Layout';
import About from "./components/About"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='store' element={<Store />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
