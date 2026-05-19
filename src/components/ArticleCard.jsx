import { Link } from "react-router-dom";

import "../styles/components/ArticleCard.scss";
import fallbackNews from "../assets/no-image-available-icon.jpg";

const ArticleCard = ({ article }) => {
    return (
        <article className="article-card">
            <div className="article-card__image-wrapper">
                <img
                    src={article.image_url || fallbackNews}
                    alt={article.title}
                    onError={(e) => {
                        e.target.src = fallbackNews;
                    }}
                    className="article-card__image"
                />
            </div>

            <div className="article-card__content">
                <span className="article-card__source">
                    {article.source_name}
                </span>

                <h2 className="article-card__title">
                    {article.title}
                </h2>

                <p className="article-card__description">
                    {article.description || "No description available."}
                </p>
            </div>

            <div className="article-card__footer">
                <span className="article-card__date">
                    {new Date(article.pubDate).toLocaleDateString()}
                </span>

                <Link
                    to={`/articles/${article.article_id}`}
                    className="article-card__link"
                >
                    Read article
                </Link>
            </div>
        </article>
    );
};

export default ArticleCard;