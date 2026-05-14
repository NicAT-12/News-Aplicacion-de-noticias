import "../styles/components/SourceCard.scss";

const SourceCard = ({ source }) => {
    return (
        <article className="source-card">
            <div className="source-card__category">
                {source.category}
            </div>

            <div className="source-card__content">
                <h2 className="source-card__title">
                    {source.name}
                </h2>

                <p className="source-card__description">
                    {source.description || "No description available"}
                </p>
            </div>

            <div className="source-card__footer">
                <span className="source-card__country">
                    {source.country}
                </span>
                <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="source-card__link"
                >
                    Visit Site
                </a>
            </div>
        </article>
    )
};

export default SourceCard;