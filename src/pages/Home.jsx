import Carousel from "../components/Carousel";
import Final from "../components/Final";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Stack from "../components/Stack";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Hero />
      <Stack />
      <Carousel />
      <Final />
      <Footer />
    </div>
  );
};

export default Home;
