import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              Stay informed with the latest news from around the world. Get insights into various topics and trends, all in one place.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
              <li><a href="/privacy-policy" className="text-white">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <p className="mb-0">© 2025 News App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
