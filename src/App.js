import "./App.css";
import Filter from "./Components/FilterMenu/Filter";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import MainLayout from "./Components/MainLayout/MainLayout";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";
import RectangularMenu from "./Components/RectangularMenu/RectangularMenu";
// import Filter from "./Components/FilterMenu/Filter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div>
        <RectangularMenu />
      </div>
      <MainLayout />
      <Footer />
    </div>
  );
}

export default App;
