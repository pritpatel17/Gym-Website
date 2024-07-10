import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Layout/Footer/Footer";
import About from "./Pages/About/About";
import Shop from "./Pages/Shop/Shop";
import Blog from "./Pages/BlogPage/Blog";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={[<Navbar />, <Home />, <Footer />]}></Route>
          <Route path="/About" element={[<Navbar />, <About />, <Footer />]}></Route>
          <Route path="/Shop" element={[<Navbar />, <Shop />, <Footer />]}></Route>
          <Route path="/BlogPage" element={[<Navbar />, <Blog />, <Footer />]}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
