import './App.css'
import { Route, Routes } from 'react-router-dom'

import DashboardPage from './pages/dashboard/DashboardPage'
import LoginPage from './pages/login/LoginPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App
