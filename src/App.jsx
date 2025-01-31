import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CascadingFilter from './pages/cascading-filter/cascading-filter'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

function App() {
  return <div className='flex flex-col h-screen'><RouterHeader /></div>
}

function RouterHeader() {
  return <BrowserRouter>
    <Navbar />
    <div className='flex-1 p-2'>
      <Routes>
        <Route path="/cascading-filter" element={<CascadingFilter />} />
      </Routes>
    </div>
    <Footer/>
  </BrowserRouter>
}


export default App
