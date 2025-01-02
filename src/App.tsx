import { Navigate, Route, Routes } from 'react-router';
import './App.css'
import { LoginPage } from './pages/Login/LoginPage';
import { HomePage } from './pages/Home/HomePage';
import { MainLayout } from './components/layout/MainLayout';
import { DoctorPage } from './pages/Doctor/DoctorPage';
import { PatientPage } from './pages/Patient/PatientPage';


function App() {


  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/app" element={<MainLayout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="doctor" element={<DoctorPage />} />
        <Route path="paciente" element={<PatientPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/app/home" />} />
    </Routes>
  )
}

export default App
