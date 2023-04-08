import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Contest from "./components/Contest/Contest";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="auth" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="contest" element={<Contest />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
