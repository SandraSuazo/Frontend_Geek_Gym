import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Appbar } from "./shared/components/appbar/Appbar.jsx";
import { Home } from "./pages/home/Home.jsx";
import { Login } from "./pages/login/Login.jsx";
import { Register } from "./pages/register/Register.jsx";
import { Profile } from "./pages/profile/Profile.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
