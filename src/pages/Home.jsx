import AppDesc from "../components/AppDesc";
import Carousel from "../components/Carousel";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Stack from "../components/Stack";
import Banner from "../components/Banner";
import Testimonial from "../components/Testimonial";
import MainLayout from "./../components/MainLayout";
import HomeProducts from "../components/HomeProducts";

const Home = () => {
  return (
    <>
      <MainLayout />
      <ScrollToTop />
      <HomeProducts />
      <AppDesc />
      {/* <Stack /> */}
      <Testimonial />
      <Banner />
      <Footer />
    </>
  );
};

export default Home;
