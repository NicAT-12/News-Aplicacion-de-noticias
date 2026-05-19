import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../services/articlesService";

import "../styles/pages/ArticleDetails.scss";

const ArticleDetails = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getArticles();

                const selectedArticle = data.find((article) =>
                    article.article_id === id
                );

                setArticle(selectedArticle);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [id]);

    if (!article) {
        return (
            <main className="article-details">
                <div className="article-details__container">
                    <h1 className="article-details__title">
                        Article not found
                    </h1>

                    <Link to="/articles" className="article-details__button">
                        Back to articles
                    </Link>
                </div>
            </main>
        );
    }

    const unavailableContent = article.content?.includes("SOLO DISPONIBLE");

    const articleContent = unavailableContent
        ? "Full content is not available in the free API plan. You can read the complete article from the original source."
        : article.content;

    return (
        <main className="article-details">
            <div className="article-details__container">
                <Link to="/articles" className="article-details__back">
                    Back to articles
                </Link>

                {article.image_url && (
                    <div className="article-details__image-wrapper">
                        <img
                            src={article.image_url}
                            alt={article.title}
                            className="article-details__image"
                        />
                    </div>
                )}

                <div className="article-details__meta">
                    <span>{article.source_name}</span>
                    <span>{new Date(article.pubDate).toLocaleDateString()}</span>
                    {article.category?.[0] && <span>{article.category[0]}</span>}
                </div>

                <h1 className="article-details__title">
                    {article.title}
                </h1>

                <p className="article-details__description">
                    {article.description || "No description available."}
                </p>

                <div className="article-details__content">
                    <p>
                        {articleContent || "Content not available for this article."}
                    </p>
                </div>

                <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="article-details__button"
                >
                    Read original article
                </a>
            </div>
        </main>
    );
};

export default ArticleDetails;