import "../styles/components/NewsCard.scss";

const NewsCard = ({ article }) => {
    return (
        <article className="news-card">
            <img className="news-card__image" 
                src={article.urlToImage || "https://placehold.co/600x400?text=No+Image"} 
                alt={article.title}
                onError={(e) => {
                    e.target.src = "https://placehold.co/600x400?text=No+Image";
                }} 
            />
            <div className="news-card__content">
                <h2 className="news-card__title">
                    {article.title}
                </h2>
            
                <p className="news-card__description">
                    {article.description || "No description avalible"}
                </p>
            </div>
        </article>
    )
};

export default NewsCard;