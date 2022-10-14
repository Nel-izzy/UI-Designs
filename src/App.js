import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";

import "./App.css";
import LoginPage from "./components/LoginPage";
import Users from "./components/User/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
