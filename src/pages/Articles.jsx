import { useEffect, useState } from "react";
import { getArticles } from "../services/articlesService";
import ArticleCard from "../components/ArticleCard";
import SkeletonCard from "../components/SkeletonCard";

import "../styles/pages/Articles.scss";

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fail, setFail] = useState(null);
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    const skeletons = [1, 2, 3, 4, 5, 6];

    const filteredArticles = articles.filter((article) =>
        article.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    useEffect(() => {
        async function fetchData() {
            try {
                const articles = await getArticles();
                setArticles(articles);
            } catch (error) {
                setFail(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [search]);

    if (fail) return <h1>{fail}</h1>;

    return (
        <main className="articles">
            <header className="articles__header">
                <span className="articles__eyebrow">
                    Latest Articles
                </span>

                <h1 className="articles__title">
                    Explore current stories from trusted global sources.
                </h1>

                <p className="articles__description">
                    Search and discover articles across technology, business, science and world news.
                </p>
            </header>

            <section className="articles__toolbar">
                <input
                    className="articles__search"
                    type="text"
                    placeholder="Search articles..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </section>

            <section className="articles__grid">
                {
                    loading
                        ? skeletons.map((skeleton) => (
                            <SkeletonCard key={skeleton} />
                        ))
                        : filteredArticles.length === 0
                            ? <h3 className="articles__empty">No articles found</h3>
                            : filteredArticles.map((article) => (
                                <ArticleCard
                                    key={article.url}
                                    article={article}
                                />
                            ))
                }
            </section>
        </main>
    );
};

export default Articles;