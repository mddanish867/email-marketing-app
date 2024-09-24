import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom';
import LandingPage from './Home/LandingPage';
import Register from './UserManagement/Register';
import Login from './UserManagement/Login';
import ForgotPassword from './UserManagement/ForgotPassword';
import ResetPassword from './UserManagement/ResetPassword';
import AccountManagement from './UserManagement/EditProfile';
import RoleManagement from './UserManagement/RoleManagement';
import Dashboard from './Dashboard/Dashboard';
function App() {

  return (
  <>
  <Router>
  <div className="min-h-screen bg-white">         
        <Routes>
          <Route path="/" element={<LandingPage /> }/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/account-management" element={<AccountManagement />} />
          <Route path="/role-management" element={<RoleManagement />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>      
    </div>
  </Router>
  
  </>
  )
}

export default App
