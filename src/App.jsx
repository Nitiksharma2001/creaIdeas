import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CascadingFilter from './pages/cascading-filter/cascading-filter'

function App() {
  return <RouterHeader />
}

function RouterHeader() {
  return <BrowserRouter>
    <Routes>
      <Route path="/cascading-filter" element={<CascadingFilter />} />
    </Routes>
  </BrowserRouter>
}

export default App
