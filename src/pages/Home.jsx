import { useEffect, useState } from 'react'
import { getNews } from "../services/newsService";
import NewsCard from '../components/NewsCard';
import '../styles/pages/Home.scss';
import SkeletonCard from '../components/SkeletonCard';

function Home() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const skeletons = [1, 2, 3, 4, 5, 6];

    useEffect(() => {
        async function fetchData() {
            try {
                const articles = await getNews();
                setNews(articles);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            };
        };

        fetchData();
    }, [])

    return (
        <div className="news-grid">
            {
                loading
                    ? skeletons.map((skeleton) => (
                        <SkeletonCard
                            key={skeleton}
                        />
                    ))
                    : news.map((article) => (
                        <NewsCard
                            key={article.url}
                            article={article}
                        />
                    ))
            }
        </div>
    );
};

export default Home;