import { BrowserRouter as Router, Routes, Route ,Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Blog from "./pages/Blog";
import BlogEntry from "./pages/BlogEntry";
import BlogEntry1 from "./pages/BlogEntry1";


function App() {
  return (
    <Router>
      <div>
       {/* Navbar will  added */}
       <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/new" element={<BlogEntry />} />      {/* useState */}
          <Route path="/blog/new1" element={<BlogEntry1 />} />
          
        </Routes>
      </div>
    </Router>
  );
}




export default App;
