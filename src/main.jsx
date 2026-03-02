import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import GuestPage from './pages/GuestPage.jsx'
import AdminPage from './pages/AdminPage.jsx'

// GitHub Pages 子路徑
const basename = import.meta.env.BASE_URL

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guest/:guestId" element={<GuestPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

