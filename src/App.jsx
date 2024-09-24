import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Home/LandingPage";
import Register from "./UserManagement/Register";
import Login from "./UserManagement/Login";
import ForgotPassword from "./UserManagement/ForgotPassword";
import ResetPassword from "./UserManagement/ResetPassword";
import AccountManagement from "./UserManagement/EditProfile";
import RoleManagement from "./UserManagement/RoleManagement";
import Dashboard from "./Dashboard/Dashboard";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Services from "./Services";
import Pricing from "./Pricing";
import Layout from "./Layout/Layout";
import EditProfile from "./UserManagement/EditProfile";
function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/role-management" element={<RoleManagement />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/profile" element={<EditProfile />} />

            </Route>

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
