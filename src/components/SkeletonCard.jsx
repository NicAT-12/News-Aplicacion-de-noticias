import "../styles/components/SkeletonCard.scss";

const SkeletonCard = () => {
    return (
        <article className="skeleton-card">
            <div className="skeleton-card__image" />

            <div className="skeleton-card__content">
                <div className="skeleton-card__line skeleton-card__line--small" />
                <div className="skeleton-card__line skeleton-card__line--title" />
                <div className="skeleton-card__line" />
                <div className="skeleton-card__line" />
            </div>

            <div className="skeleton-card__footer">
                <div className="skeleton-card__line skeleton-card__line--date" />
                <div className="skeleton-card__line skeleton-card__line--link" />
            </div>
        </article>
    );
};

export default SkeletonCard;