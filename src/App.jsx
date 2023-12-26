import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./shared/components/navbar/Navbar.jsx";
import { Home } from "./pages/home/Home.jsx";
import { About } from "./pages/about/About.jsx";
import { Activities } from "./pages/activities/Activities.jsx";
import { Login } from "./pages/login/Login.jsx";
import { Register } from "./pages/register/Register.jsx";
import { Profile } from "./pages/profile/Profile.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
