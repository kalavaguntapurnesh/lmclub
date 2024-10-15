import AboutHero from "../components/AboutHero";
import AboutTwo from "../components/AboutTwo";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Final from "../components/Final";

const About = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <AboutHero />
      <AboutTwo />
      <Final />
      <Footer />
    </div>
  );
};

export default About;
