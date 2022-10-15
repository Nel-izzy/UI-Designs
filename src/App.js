import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";

import "./App.css";
import LoginPage from "./components/LoginPage";
import Users from "./components/User/Users";
import UserDetails from "./components/User/UserDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/users/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
