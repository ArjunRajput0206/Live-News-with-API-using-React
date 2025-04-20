import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("technology");
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const categories = ["technology", "sports", "business", "health"];

  useEffect(() => {
    axios
      .get(`https://saurav.tech/NewsAPI/top-headlines/category/${selectedCategory}/in.json`)
      .then((res) => {
        if (res.data.articles) {
          setArticles(res.data.articles);
        } else {
          setError("No articles found.");
        }
      })
      .catch((err) => {
        setError("Error fetching news. Please try again later.");
        console.error(err);
      });
  }, [selectedCategory]);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return <div className="text-center mt-5"><p>{error}</p></div>;
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">📰 Top Headlines</h1>

      {/* Category Selection */}
      <div className="text-center mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn ${selectedCategory === category ? "btn-primary" : "btn-outline-primary"} mx-2`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="text-center mb-4">
        <input
          type="text"
          placeholder="Search for news"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control w-50 mx-auto"
        />
      </div>

      {/* Articles */}
      <div className="row">
        {filteredArticles.map((article, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  className="card-img-top"
                  alt={article.title}
                />
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text flex-grow-1">
                  {article.description || "No description available."}
                </p>
                <Link
                  to={`/article/${index}`}
                  className="btn btn-primary mt-3 align-self-start"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
