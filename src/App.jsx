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
import { Contest_page } from "./components/Contest_Page/Contest_page";


function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="auth" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="contest" element={<Contest />} />
          <Route path="contest_page" element={<Contest_page/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;