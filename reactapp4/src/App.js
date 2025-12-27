import { BrowserRouter as Router, Routes, Route ,Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Blog from "./pages/Blog";
import BlogEntry from "./pages/BlogEntry";


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
          <Route path="/blog/new" element={<BlogEntry />} />
          
        </Routes>
      </div>
    </Router>
  );
}




export default App;
