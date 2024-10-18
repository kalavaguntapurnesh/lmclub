import AppDesc from "../components/AppDesc";
import Carousel from "../components/Carousel";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Stack from "../components/Stack";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Hero />
      <AppDesc />
      <Stack />
      <Testimonial />
      {/* <Carousel /> */}
      {/* <FAQ /> */}
      <Footer />
    </div>
  );
};

export default Home;
