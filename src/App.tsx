import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegistrationPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path='/properties' element={<PropertiesPage />} />
        <Route path='/' element={<Landing />} />
        <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
