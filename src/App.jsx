import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes'
export default function RouterHeader() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((page, i) => (
          <Route key={i} path={`/${page.route}`} element={page.component} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
