import { mockArticles } from "../services/mockArticles";

const CACHE_TIME = 1000 * 60 * 60;

export async function getArticles(category = "top") {
    const cacheKey = `articles-${category}`;
    const cachedArticles = localStorage.getItem(cacheKey);

    if (cachedArticles) {
        const parsedCache = JSON.parse(cachedArticles);
        const isCacheValid = Date.now() - parsedCache.timestamp < CACHE_TIME;

        if (isCacheValid) {
            return parsedCache.data;
        }

        localStorage.removeItem(cacheKey);
    }

    try {
        const categoryParam = category === "top" ? "" : `&category=${category}`;

        const response = await fetch(
            `https://newsdata.io/api/1/latest?apikey=${import.meta.env.VITE_API_KEY}&language=en${categoryParam}`
        );

        if (!response.ok) {
            throw new Error(`HTTP status ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        
        const articles = data.results || [];

        localStorage.setItem(
            cacheKey,
            JSON.stringify({
                data: articles,
                timestamp: Date.now()
            })
        );

        

        return articles;
    } catch (error) {
        console.log("ERROR EN getArticles", error);

        return category === "top"
            ? mockArticles
            : mockArticles.filter((article) =>
                article.category.includes(category)
            );
    }
}