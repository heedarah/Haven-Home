import Hero from "../Hero";
import Navbar from "../Navbar";
import MarqueeContainer from "../marquee";
import Collections from "../Collections";
import VideoBackground from "../videoBackground";
import Reviews from "../Reviews";
import Footer from "../Footer";
import HomeProduct from "../HomeProduct";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MarqueeContainer />
      <Collections />
      <VideoBackground />
      <HomeProduct />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Home;
