import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Privacy from "./pages/Privacy";
import Consumer_Privacy from "./pages/Consumer_Privacy";
import LogoMeaning from "./pages/LogoMeaning";
import Enroll_Rewards from "./pages/Enroll_Rewards";
import Rewards from "./pages/Rewards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/contact-us" element={<Contact />}></Route>

        <Route path="/learn-about-us" element={<About />}></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route path="/register" element={<Register />}></Route>

        <Route path="/privacy-policy" element={<Privacy />}></Route>

        <Route path="/consumer-privacy" element={<Consumer_Privacy />}></Route>
        <Route path="/logo-meaning" element={<LogoMeaning />}></Route>
        <Route path="/enroll-rewards" element={<Enroll_Rewards />}></Route>
        <Route path="/rewards" element={<Rewards />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
