import React from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Article = () => {
  const { id } = useParams(); // This will fetch the article index from the URL
  const [article, setArticle] = React.useState(null);

  // Mock article data (use the actual data fetching logic in a real-world scenario)
  const articles = [
    // Your mock articles here or fetch them from API
    {
      title: "Technology News 1",
      description: "Description for article 1",
      urlToImage: "https://via.placeholder.com/300",
      content: "Full article content for article 1",
      url: "https://example.com/article-1"
    },
    {
      title: "Technology News 2",
      description: "Description for article 2",
      urlToImage: "https://via.placeholder.com/300",
      content: "Full article content for article 2",
      url: "https://example.com/article-2"
    },
    // More articles here...
  ];

  // Retrieve the correct article based on the index passed in the URL
  React.useEffect(() => {
    const fetchedArticle = articles[id]; // Use the ID to fetch the article from the list
    setArticle(fetchedArticle);
  }, [id]);

  if (!article) {
    return <div className="text-center mt-5"><p>Article not found!</p></div>;
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1 className="card-title mb-4">{article.title}</h1>
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  className="img-fluid mb-4"
                  alt={article.title}
                />
              )}
              <p className="card-text">{article.description || "No description available."}</p>
              <p><strong>Content:</strong> {article.content}</p>
              {article.url && (
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-4"
                >
                  Read full article
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
