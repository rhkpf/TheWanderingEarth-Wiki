import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import WikiPage from './pages/WikiPage'
import HeaderBar from './components/header'
import ClickPage from './pages/ClickPage'
import References from './pages/references'
function App() {
  return (
    <>
    <HeaderBar></HeaderBar>
     <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/wiki" element={<WikiPage/>} />
      <Route path="/wiki/:id" element={<ClickPage />}/>
      <Route path="/ref" element={<References />} />
     </Routes>
    </>
  )
}

export default App
