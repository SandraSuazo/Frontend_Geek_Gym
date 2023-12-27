import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./shared/components/navbar/Navbar.jsx";
import { Home } from "./pages/home/Home.jsx";
import { About } from "./pages/about/About.jsx";
import { AboutActivities } from "./pages/about/AboutActivities.jsx";
import { AboutNutrition } from "./pages/about/AboutNutrition.jsx";
import { Login } from "./pages/login/Login.jsx";
import { Register } from "./pages/register/Register.jsx";
import { Profile } from "./pages/profile/Profile.jsx";
import { Activities } from "./pages/activities/Activities.jsx";
import { Nutrition } from "./pages/nutrition/Nutrition.jsx";
import { AdminUsers } from "./pages/admin/AdminUsers.jsx";
import { AdminActivities } from "./pages/admin/AdminActivities.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/activities" element={<AboutActivities />} />
          <Route path="/about/nutrition" element={<AboutNutrition />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/activities" element={<AdminActivities />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
