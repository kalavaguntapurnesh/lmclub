import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Privacy from "./pages/Privacy";
import Consumer_Privacy from "./pages/Consumer_Privacy";
import Enroll_Rewards from "./pages/Enroll_Rewards";
import Rewards from "./pages/Rewards";
import PageNotFound from "./pages/PageNotFound";
// import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import TermsAndConditions from "./pages/TermsAndConditions";
import Dashboard from "./pages/Dashboard";
import PrivacyStatement from "./pages/PrivacyStatement";
import PrivacyReport from "./pages/PrivacyReport";
import Widgets from "./pages/Widgets";
import Estore from "./pages/Estore";
import Beehive from "./pages/Beehive";
import Network from "./pages/Network";
import Grow from "./pages/Grow";
import Broadcast from "./pages/Broadcast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/estore" element={<Estore />}></Route>
        <Route path="/beehive" element={<Beehive />}></Route>
        <Route path="/network" element={<Network />}></Route>
        <Route path="/grow" element={<Grow />}></Route>
        <Route path="/broadcast" element={<Broadcast />}></Route>

        <Route path="/learn-about-us" element={<About />}></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route path="/register" element={<Register />}></Route>
        <Route path="/register" element={<TermsAndConditions />}></Route>
        <Route path="/widgets" element={<Widgets />}></Route>

        <Route path="/privacy-policy" element={<Privacy />}></Route>
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        ></Route>

        <Route path="/consumer-privacy" element={<Consumer_Privacy />}></Route>
        <Route path="/privacy-statement" element={<PrivacyStatement />}></Route>
        <Route path="/privacy-report" element={<PrivacyReport />}></Route>

        <Route path="/enroll-rewards" element={<Enroll_Rewards />}></Route>
        <Route path="/rewards" element={<Rewards />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        {/* <Route path="/products" element={<Products />}></Route> */}
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
