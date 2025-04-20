import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Category from './pages/Category';
import Article from './pages/Article';
import Search from './pages/Search';
import Header from "./common/Header";
import Footer from "./common/Footer";

function App() {
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:type" element={<Category />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
