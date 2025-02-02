import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CascadingFilter from './pages/cascading-filter/cascading-filter'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import RequestBar from './pages/request-bar/request-bar'
import InfiniteScroll from './pages/infinte-scroll/infinite-scroll'

function App() {
  return <div className='flex flex-col h-screen'><RouterHeader /></div>
}

function RouterHeader() {
  return <BrowserRouter>
    <Navbar />
    <div className='flex-1 p-2'>
      <Routes>
        <Route path="/cascading-filter" element={<CascadingFilter />} />
        <Route path="/request-bar" element={<RequestBar />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll />} />
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
}


export default App
