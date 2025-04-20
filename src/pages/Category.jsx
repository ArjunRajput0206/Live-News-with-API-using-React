import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Category = () => {
  const { type } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?category=${type}&country=us&apiKey=YOUR_API_KEY`)
      .then((res) => setArticles(res.data.articles))
      .catch((err) => console.error(err));
  }, [type]);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-8 capitalize">
        {type} News
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Link
            key={index}
            to={`/article/${index}`}
            state={{ article }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 text-sm line-clamp-3">
                {article.description || "No description available."}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
