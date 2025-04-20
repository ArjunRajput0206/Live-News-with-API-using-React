import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="mb-0">
          <Link to="/" className="text-white text-decoration-none">
            📰 News App
          </Link>
        </h1>
        <nav>
          <Link to="/" className="text-white mx-3">Home</Link>
          <Link to="/search" className="text-white mx-3">Search</Link>
          <Link to="/category/technology" className="text-white mx-3">Technology</Link>
          <Link to="/category/sports" className="text-white mx-3">Sports</Link>
          <Link to="/category/business" className="text-white mx-3">Business</Link>
          <Link to="/category/health" className="text-white mx-3">Health</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;