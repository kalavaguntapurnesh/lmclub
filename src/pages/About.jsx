import AboutHero from "../components/AboutHero";
import AboutTwo from "../components/AboutTwo";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";

const About = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <AboutHero />
      <AboutTwo />
      <Footer />
    </>
  );
};

export default About;
