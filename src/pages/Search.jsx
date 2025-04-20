import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=YOUR_API_KEY`
      );
      setResults(res.data.articles);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSearch} className="flex justify-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Search news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-lg shadow"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((article, index) => (
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

export default Search;
