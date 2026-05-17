import "../styles/components/ArticleCard.scss";

const ArticleCard = ({ article }) => {
    return (
        <article className="article-card">
            <div className="article-card__image-wrapper">
                <img
                    src={article.image}
                    alt={article.title}
                    className="article-card__image"
                />
            </div>

            <div className="article-card__content">
                <span className="article-card__source">
                    {article.source.name}
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
                    {new Date(article.publishedAt).toLocaleDateString()}
                </span>

                <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="article-card__link"
                >
                    Read article
                </a>
            </div>
        </article>
    );
};

export default ArticleCard;